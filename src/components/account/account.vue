<template>
    <div class="flex flex-col items-center justify-center h-[80vh]">
        <div class="border-2 border-gray-500 rounded-lg p-6 flex flex-col items-center bg-white shadow-lg">
        <h1 class=" font-bold  h-full bg-amber-700 text-2xl rounded-2xl text-white p-3 mb-4">Account Page</h1>
        <p class="text-lg mb-2">Welcome, {{ user.firstName }}!</p>
        <p class="text-lg mb-4">Email: {{ user.email }}</p>  
        <!-- <p class="text-lg mb-4">user:{{ user }}</p>    -->
        <button @click="logout" class="cursor-pointer hover:bg-blue-600 bg-red-500 focus:bg-blue-400 text-white px-4 py-2 rounded">Logout</button>
        </div>
    </div>
</template>
<script>
import { useAuthStore } from '@/store/auth';
// import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default{
    name:'Account',
    setup(){
        const authStore = useAuthStore();
        const user = authStore.user;
        const router = useRouter();
        // const isAuthenticated = authStore.isAuthenticated;
    //     if (!isAuthenticated) {
    //   router.push('/login');
    //   refresh();
    // }

        // console.log('User data:', user);
        const { firstName, email } = user;
        user.firstName = firstName || 'Guest';
        user.email = email || 'No email provided';
     

        const logout = () => {
            authStore.Logout();
        };
        return {
            user,
            logout,
            // isAuthenticated
        };
    }
}
</script>