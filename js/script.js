(function () {

 const { createApp, ref, computed, onMounted } = Vue;

 const App = {
   setup() {


     const apiClient = axios.create({
       baseURL: apiBaseUrl.value,
       headers: {
         Accept: "application/json",
       },
       responseType: "json",
       timeout: 10000,
     });

     const fetchPosts = async () => {
       try {
         isLoading.value = true;
         const res = await apiClient.get(
           `/posts/${serviceId.value}/groups/pickup?count=3&order=asc&withCategory=1`
         );
         posts.value = res.data.posts;
       } catch (err) {
         console.error(err);
         // alert("Failed to fetch posts");
       } finally {
         isLoading.value = false;
       }
     };


     onMounted(() => {
       fetchPosts();
     });

     return {
       // posts,
     };
   },
 };
 createApp(App).mount("#app");
})();
