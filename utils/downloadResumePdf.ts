import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const downloadResumePdf = async (
  fileName: string = "SerajVahdati-Resume.pdf"
) => {
  try {
    // Get the resume container element
    const resumeContainer = document.getElementById("resume-container");

    if (!resumeContainer) {
      console.error("Resume container not found");
      return;
    }

    // Show loading state (optional)
    const originalCursor = document.body.style.cursor;
    document.body.style.cursor = "wait";

    // Save current scroll position
    const originalScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    // Scroll to top to ensure everything is rendered
    window.scrollTo(0, 0);

    // Wait a bit for any animations or lazy loading
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Convert the HTML element to canvas
    const canvas = await html2canvas(resumeContainer, {
      scale: 1.5,
      useCORS: true,
      logging: false,
      allowTaint: true,
      backgroundColor: "#ffffff",
      scrollY: -window.scrollY,
      scrollX: -window.scrollX,
      width: resumeContainer.scrollWidth,
      height: resumeContainer.scrollHeight,
    });

    // A4 dimensions in mm
    const a4Width = 210;
    const a4Height = 297;

    // Calculate the dimensions to fit the content
    const imgWidth = a4Width;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // Create PDF
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    // Convert canvas to JPEG for much smaller file size
    const imgData = canvas.toDataURL("image/jpeg", 0.85);

    let heightLeft = imgHeight;
    let position = 0;

    // Add first page
    pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight, undefined, "FAST");
    heightLeft -= a4Height;

    // Add additional pages if content is longer than one page
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight, undefined, "FAST");
      heightLeft -= a4Height;
    }

    // Download the PDF
    pdf.save(fileName);

    // Restore scroll position
    window.scrollTo(0, originalScrollTop);

    // Reset cursor
    document.body.style.cursor = originalCursor;
  } catch (error) {
    console.error("Error generating PDF:", error);
    document.body.style.cursor = "default";
    // Restore scroll on error
    window.scrollTo(0, 0);
  }
};
