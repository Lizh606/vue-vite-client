import { onMounted, ref, type Ref } from "vue"

export default function useTableHeight(domRef: Ref<HTMLElement>): Ref<number> {
  const height = ref(0)
  const changeHeight = () => {
    height.value = domRef.value.offsetHeight
  }
  onMounted(() => {
    changeHeight()
    window.onresize = () => {
      changeHeight()
    }
  })

  return height
}
