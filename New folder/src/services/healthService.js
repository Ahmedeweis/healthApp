export const HealthService = {
    async getHealthStats() {
        // Mocking an API call
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    steps: 8500,
                    calories: 1200,
                    sleepHours: 7.5
                });
            }, 500);
        });
    }
};
