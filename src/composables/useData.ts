import { onMounted, ref } from 'vue'

import axios from '@/config/axios'

export default function useData(endpoint: string) {
  const loading = ref(false)
  const data = ref<null | {
    results: any[]
  }>(null)
  const error = ref<null | unknown>(null)

  onMounted(async () => {
    loading.value = true

    axios
      .get(endpoint)
      .then(({ data: axiosData }) => (data.value = axiosData))
      .catch((e) => (error.value = e.message))
      .finally(() => (loading.value = false))
  })

  return {
    loading,
    data,
    error
  }
}
