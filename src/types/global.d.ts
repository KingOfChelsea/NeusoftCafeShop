export type PageResult<T> = {
  counts: number //总条数
  pageSize: number //每条页数
  pages: number //总页数
  page: number //当前页数
  items: T[]
}
