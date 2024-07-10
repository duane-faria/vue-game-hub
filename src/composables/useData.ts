import { onMounted, ref } from 'vue'

import axios from '@/config/axios'

export default async function useData(endpoint: string) {
  const loading = ref(false)
  const data = ref(null)
  const error = ref<null | unknown>(null)

  onMounted(async () => {
    try {
      loading.value = true

      const { data: axiosData } = await axios.get(endpoint)

      data.value = axiosData
    } catch (e: unknown) {
      error.value = e
    } finally {
      loading.value = false
    }
  })

  return {
    loading,
    data,
    error
  }
}
