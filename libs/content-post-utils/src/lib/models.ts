export interface ContentPost {
  id: string;
  content: string;
  authorId: string;
  created: Date;
}

export interface CreateContentPostRequestBody {
  content: string;
}
