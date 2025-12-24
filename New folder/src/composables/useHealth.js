import { HealthService } from '~/services/healthService';

export const useHealth = () => {
    const stats = ref(null);
    const loading = ref(false);
    const error = ref(null);

    const fetchStats = async () => {
        loading.value = true;
        try {
            stats.value = await HealthService.getHealthStats();
        } catch (err) {
            error.value = err;
        } finally {
            loading.value = false;
        }
    };

    return {
        stats,
        loading,
        error,
        fetchStats
    };
};
