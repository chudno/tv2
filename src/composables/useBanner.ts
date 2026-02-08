import { ref, onMounted } from 'vue';
import axios from 'axios';
import type { BannerProps } from '@/layouts/AppBanner/AppBanner.vue';

export function useBanner() {
  const banner = ref<BannerProps | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function fetchBanner() {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.get('https://f0313869adf7fa26.mokky.dev/payments');
      banner.value = response.data[0].banner;
    } catch (e) {
      error.value = 'Не удалось загрузить баннер';
    } finally {
      loading.value = false;
    }
  }

  onMounted(fetchBanner);

  return { banner, loading, error };
}
