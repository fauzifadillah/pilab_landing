<template>
  <footer class="bg-white">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-auto mb-6">
          <!-- <logo /> -->
          <img id="footer-image" src="~assets/img/footer.png"/>
          <p class="uppercase text-gray-700 mt-6 mr-4 md:mb-1 text-base	">PT. PADJADJARAN TEKNOLOGI INFORMATIKA</p>
          <p class=" text-gray-600 mr-4 text-sm	">Kawasan Sains dan Teknologi Padjadjaran</p>
          <p class=" text-gray-600 mr-4 text-sm	">Jl. Raya Bandung-Sumedang KM. 21 Universitas Padjadjaran<br>Jawa Barat, Indonesia 45363</p>
          <p class=" text-gray-600 mr-4 md:mt-2 text-sm	">code@padjadjaranlab.com</p>
          <p class=" text-gray-600 mr-4 text-sm	">+62 859 4722 4853</p>
        </div>

        <div class="flex-auto">
          <p class="uppercase text-gray-500 md:mb-3">Links</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="text-sm no-underline hover:underline text-gray-800 hover:text-orange-500"
              >Services</a>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="text-sm no-underline hover:underline text-gray-800 hover:text-orange-500"
              >Portofolio</a>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="text-sm no-underline hover:underline text-gray-800 hover:text-orange-500"
              >Approach</a>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="text-sm no-underline hover:underline text-gray-800 hover:text-orange-500"
              >Profiles</a>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="text-sm no-underline hover:underline text-gray-800 hover:text-orange-500"
              >Talk</a>
            </li>
          </ul>
        </div>
        <div class="flex-auto">
          <p class="uppercase text-gray-500 md:mb-3">Links</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="text-sm no-underline hover:underline text-gray-800 hover:text-orange-500"
              >Services</a>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="text-sm no-underline hover:underline text-gray-800 hover:text-orange-500"
              >Portofolio</a>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="text-sm no-underline hover:underline text-gray-800 hover:text-orange-500"
              >Approach</a>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="text-sm no-underline hover:underline text-gray-800 hover:text-orange-500"
              >Profiles</a>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="text-sm no-underline hover:underline text-gray-800 hover:text-orange-500"
              >Talk</a>
            </li>
          </ul>
        </div>
        <div class="flex-auto">
          <p class="uppercase text-gray-500 md:mb-6">Social</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >Facebook</a>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >Linkedin</a>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </footer>
</template>
<style scoped>
#footer-image {
  display: block;
  max-width:230px;
  max-height:95px;
  width: auto;
  height: auto;
}
</style>
<script>
import Logo from '@/components/Logo'

export default {
  name: 'TheFooter',
  components: {
    logo: Logo
  }
}
</script>
