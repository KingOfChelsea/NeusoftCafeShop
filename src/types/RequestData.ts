// 这里相当于定义了一个类 只是以接口的方式呈现
export interface Data<T> {
  code: string
  msg: string
  result: T // 泛型承载业务数据
}
