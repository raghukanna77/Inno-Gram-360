import os
import subprocess
import pikepdf

def compress_with_pikepdf(input_pdf, temp_pdf):
    pdf = pikepdf.open(input_pdf)
    pdf.save(temp_pdf, optimize_version=True)
    pdf.close()

def compress_with_ghostscript(input_pdf, output_pdf, quality):
    # Ghostscript command
    gs_command = [
        "gs",
        "-sDEVICE=pdfwrite",
        "-dCompatibilityLevel=1.4",
        f"-dPDFSETTINGS=/{quality}",
        "-dNOPAUSE",
        "-dQUIET",
        "-dBATCH",
        f"-sOutputFile={output_pdf}",
        input_pdf,
    ]
    subprocess.run(gs_command, check=True)

def reduce_pdf(input_pdf, output_pdf, target_size_kb=100):
    temp_pdf = "temp_optimized.pdf"
    compress_with_pikepdf(input_pdf, temp_pdf)

    # Check size after pikepdf optimization
    size_kb = os.path.getsize(temp_pdf) / 1024
    print(f"After pikepdf: {size_kb:.2f} KB")

    if size_kb <= target_size_kb:
        os.rename(temp_pdf, output_pdf)
        print(f"Saved optimized PDF under {target_size_kb} KB: {output_pdf}")
        return

    # Try Ghostscript compression with different quality levels
    qualities = ["ebook", "screen"]  # "printer" is higher quality
    for q in qualities:
        compress_with_ghostscript(temp_pdf, output_pdf, q)
        size_kb = os.path.getsize(output_pdf) / 1024
        print(f"After Ghostscript ({q}): {size_kb:.2f} KB")
        if size_kb <= target_size_kb:
            print(f"Success: Reduced to {size_kb:.2f} KB with quality={q}")
            os.remove(temp_pdf)
            return

    print("⚠️ Could not reduce below target size with available settings.")
    os.remove(temp_pdf)

if __name__ == "__main__":
    input_file = "input.pdf"   # Replace with your PDF file
    output_file = "output.pdf"
    reduce_pdf(input_file, output_file, target_size_kb=100)
