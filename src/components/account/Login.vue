<template>
    <div class="flex flex-col items-center justify-center h-[80vh] ">
        <form class="border-2 border-gray-500 rounded-lg p-6 flex flex-col items-center" action="">
            <h1 class="font-bold font-sans text-2xl text-white bg-green-500 p-3 rounded-2xl ">Login here</h1>
            <div class="flex flex-col gap-2">
                <label for="email">Email</label>
                <input v-model="email" type="email" id="email" placeholder="Enter your email"
                    class="border-2 border-gray-300 rounded p-2 w-80">
            </div>
            <div class="flex flex-col gap-2 mt-4">
                <label for="password">Password</label>
                <input v-model="pass" type="password" id="password" placeholder="Enter your password"
                    class="border-2 border-gray-300 rounded p-2 w-80">
            </div>
            <button @click="HandleLogin" type="submit"
                class="mt-4 bg-blue-500 focus:bg-red-500 text-white p-2 rounded w-80">Login</button>
        </form>

    </div>
</template>
<script>
import { useAuthStore } from '@/store/auth';
import { useRouter } from 'vue-router';
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            pass: '',
        }
    },
    setup() {
        const useAuth = useAuthStore();
        const router = useRouter();
        return {
            useAuth
            , router
        }
    },

    methods: {

        HandleLogin(event) {
              const router = useRouter();
            event.preventDefault();
            // Validate email and password
            if (this.email === '' || this.pass === '') {
                alert('Please fill in all fields');
                return;
            }
            this.useAuth.login(this.email, this.pass);
            //   authStore.Logout();
            router.push('/account');

            // Here you can add your login logic, e.g., API call

        }

    }
}
</script>