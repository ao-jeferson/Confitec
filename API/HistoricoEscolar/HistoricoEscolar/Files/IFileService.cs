using Microsoft.VisualBasic.FileIO;

namespace HistoricoEscolar.Files
{

    public interface IFileService
    {
        public Task PostFileAsync(IFormFile fileData, int fileType);
        public Task PostMultiFileAsync(List<FileUploadModel> fileData);
        public Task DownloadFileById(int fileName);
    }


}
