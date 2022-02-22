export interface PointsData {
  point: string
  title: string
}

export interface PointRepo {
  fetchPoints(params?: {
    page?: number
    per?: number
  }): any
}

export interface Repositories {
  pointRepo: PointRepo
}
