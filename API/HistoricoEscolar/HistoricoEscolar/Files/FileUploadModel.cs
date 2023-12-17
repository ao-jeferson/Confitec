using Microsoft.VisualBasic.FileIO;

namespace HistoricoEscolar.Files
{
    public class FileUploadModel
    {
        public IFormFile FileDetails { get; set; }
        public int FileType { get; set; }
    }
}
