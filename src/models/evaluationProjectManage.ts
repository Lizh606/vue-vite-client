export type FormalReviewContentConfig = {
  name: string
  data: FormalReviewContentData[]
  isTable?: boolean
}
export type FormalReviewContentData = FormalReviewCeilData[]
export type FormalReviewCeilData = {
  name: string
  value: string
  isRequired?: boolean
  notHalf?: boolean
}
