import { ref, onMounted } from 'vue';
import axios from 'axios';
import type { FooterProps } from '@/layouts/AppFooter/AppFooter.vue';

export function useFooter() {
  const footer = ref<FooterProps | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function fetchFooter() {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.get('https://f0313869adf7fa26.mokky.dev/payments');
      footer.value = response.data[0].footer;
    } catch (e) {
      error.value = 'Не удалось загрузить футер';
    } finally {
      loading.value = false;
    }
  }

  onMounted(fetchFooter);

  return { footer, loading, error };
}
