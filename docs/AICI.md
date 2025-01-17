# CI

## Dify CI

### Agent

```ts
/** Request */
{
    input: {[k:string]:any}
    response_mode: streaming | blocking
    user:string (required)
    files: Array<object> optional
    // FileObject
        // type:
        //     documents: 'TXT', 'MD', 'MARKDOWN', 'PDF', 'HTML', 'XLSX', 'XLS', 'DOCX', 'CSV', 'EML', 'MSG', 'PPTX', 'PPT', 'XML', 'EPUB'
        //     image: 'JPG', 'JPEG', 'PNG', 'GIF', 'WEBP', 'SVG'
        //     audio: 'MP3', 'M4A', 'WAV', 'WEBM', 'AMR'
        //     video : 'MP4', 'MOV', 'MPEG', 'MPGA'
        //     custom: 其他文件类型
        // transfer_method: (string) 传递方式，remote_url 图片地址 / local_file 上传文件
        // url: (string) 图片地址（仅当传递方式为 remote_url 时）
        // upload_file_id: (string) (string) 上传文件 ID（仅当传递方式为 local_file 时）
}
/** respone */
CompletionResponse
ChunkCompletionResponse
```
