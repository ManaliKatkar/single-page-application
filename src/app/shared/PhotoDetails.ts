export class PhotoDetails {
  albumId: number;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
  is_removed: boolean;

  constructor(
    albumId: number,
    id: string,
    title: string,
    url: string,
    thumbnailUrl: string,
    is_removed: boolean
  ) {
    this.albumId = albumId;
    this.id = id;
    this.title = title;
    this.url = url;
    this.thumbnailUrl = thumbnailUrl;
    this.is_removed = is_removed
  }
}
