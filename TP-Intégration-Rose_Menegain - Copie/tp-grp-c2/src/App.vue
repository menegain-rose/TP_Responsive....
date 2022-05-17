
<template>

  <section class="bg-gray-100">
    <h1 class="text-center text-xl">TP agence immobilière</h1>
      <header>
          <div class="p-3 mt-5 mb-5 bg-gray-100 ring-2 ring-gray-400 flex justify-between">
            <div class="flex">
                <icon-logo />
                <RouterLink to="/" class="inline-block ml-4 mr-4 text-lg font-bold text-black">Estatery</RouterLink>
                <nav class="hidden lg:flex m-2 text-base font-semibold">
                  <div class="mx-5">Buy</div>       
                  <div class="mx-5">Manage Property</div>
                  <div class="mx-5">Ressources</div>              
                  <div class="mx-5">Sell</div>      
                </nav>
              </div>
              <MenuAlt4Icon class="inline-block text-right w-8"/>
          </div>
      </header>
      <main>
        <h2 class="text-xl font-bold text-center mb-4">Search proprieties to rent</h2>
        <section>
              <div class='w-full max-w-lg px-10 pt-8 pb-3 mx-auto'>
                  <div class='max-w-md mx-auto space-y-6'>
                      <div class="dropdown-menu">
                          <div class="bg-white rounded-lg flex items-center px-5 py-3 cursor-pointer border-2">
                              <input type="text" placeholder="Search with search bar" readonly class="pointer-events-none text-base placeholder-gray-400 outline-none w-full h-full flex-1" />
                                <svg width="20" height="10" viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0" y1="0" x2="10" y2="10" stroke="#9CA3AF" />
                                <line x1="20" y1="0" x2="10" y2="10" stroke="#9CA3AF" />
                                </svg>
                          </div>
                      </div>
                  </div>
              </div>
        </section>
        <section>
              <div class='w-full max-w-lg px-10 pt-8 pb-3 mx-auto'>
                  <div class='max-w-md mx-auto space-y-6'>
                      <div class="dropdown-menu">
                          <div class="bg-white rounded-lg flex items-center px-5 py-3 cursor-pointer border-2">
                              <input type="text" placeholder="Search location" readonly class="pointer-events-none text-base placeholder-gray-400 outline-none w-full h-full flex-1" />
                              <SearchIcon class="inline-block text-right w-5 "/>
                          </div>
                      </div>
                  </div>
              </div>
        </section>
        <section class="overflow-hidden md:max-w-2xl">
          <section class="md:flex">
            <div class="">
              <card :price="2700" 
                    titre="Beverly Springfield" 
                    nbrSDB="2"
                    nbrBed="6"
                    nbrDim="120m²"
                    adresse="2821 Lake Savilla, Palm Harbor, TX"
                    image="/images-maisons/MaisonBeverly.jpg"
                    favori="false"
                    />
            </div>
          </section>
          <section class="md:flex">
            <div class="">
              <card :price="1200" 
                    titre="Petite maison" 
                    nbrSDB="1"
                    nbrBed="4"
                    nbrDim="72m²"
                    adresse="Fanshawe Pioneer Village, London, Canada"
                    image="/images-maisons/MaisonCanada.jpg"
                    favori="false"/>
            </div>
          </section>
          <section class="md:flex">
            <div class="">
              <card :price="3500" 
                    titre="Maison de Belgique" 
                    nbrSDB="2"
                    nbrBed="4"
                    nbrDim="115m²"
                    adresse="Narvik HomeParc Mooi Zutendaal, Zutendaal, Belgium"
                    image="/images-maisons/MaisonBelgique.jpg"
                    favori="true"/>
            </div>
          </section>
          <section>
            <div class="">
              <card :price="800" 
                    titre="Chalet de montagne" 
                    nbrSDB="1"
                    nbrBed="1"
                    nbrDim="25m²"
                    adresse="Westfjords Region, Iceland"
                    image="/images-maisons/Chalet.jpg"
                    favori="false"/>
            </div>
          </section>
        </section>
          <div class="text-center my-10">
            <ChevronLeftIcon class="inline-block text-right w-8"/>
            <p class="inline-block ml-4 mr-4 text-base text-white bg-indigo-900 py-2 px-4 rounded-full ">1</p>
            <p class="inline-block ml-4 mr-4 text-base text-indigo-900 bg-White py-2 px-4 rounded-full ">2</p>
            <p class="inline-block ml-4 mr-4 text-base text-indigo-900 py-2 px-5 ">...</p>
            <p class="inline-block ml-4 mr-4 text-base text-indigo-900 bg-White py-2 px-3 rounded-full ">10</p>
            <ChevronRightIcon class="inline-block text-right w-8"/>
          </div>
      </main>
      <footer class="p-3 mt-5 mb-5 bg-gray-50">
              <icon-logo />
          <p class="inline-block ml-4 mr-4 text-lg text-blue-600 ">Estatery</p>
        <div class="grid grid-rows-3 grid-flow-col">
          <div class="m-5">
            <h3 class="font-bold mb-2">SELL A HOME</h3>
            <p>Request an offer</p>
            <p>Pricing</p>
            <p>Reviews</p>
            <p>Stories</p>
          </div>
          <div class="m-5">
            <h3 class="font-bold mb-2">BUY A HOME</h3>
            <p>Buy</p>
            <p>Finance</p>
          </div>
          <div class="m-5">
            <h3 class="font-bold mb-2">BUY, RENT AND SELL</h3>
            <p>Buy & sell proprieties</p>
            <p>Rent home</p>
            <p>Builder trade-up</p>
          </div>
          <div class="m-5">
            <h3 class="font-bold mb-2">TERMS &  PRIVACY</h3>
            <p>Trust & Safety</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
          <div class="m-5">
            <h3 class="font-bold mb-2">ABOUT</h3>
            <p>Company</p>
            <p>How it works</p>
            <p>Contact</p>
            <p>Invertors</p>
          </div>
          <div class="m-5">
            <h3 class="font-bold mb-2">RESSOURCES</h3>
            <p>Blog</p>
            <p>Guides</p>
            <p>FAQ</p>
            <p>Help Center</p>
          </div>
        </div>
        <hr> <hr>

        <div class="text-center my-5">
          <p class="text-sm text-gray-400">2021 Estatery. All rights reserved</p>
          <AtSymbolIcon class="inline-block w-5 m-3"/>
          <QuestionMarkCircleIcon class="inline-block w-5 m-3"/>
          <ChatAltIcon class="inline-block w-5 m-3"/>
          <GiftIcon class="inline-block w-5 m-3"/>
        </div>

      </footer>
  </section>
    <br>
</template>


<script >
import IconLogo from "./components/icones/IconLogo.vue";
import card from "./components/card.vue";
import bouton from "./components/bouton.vue";
import { ArchiveIcon, BellIcon, AdjustmentsIcon, SearchIcon, UserAddIcon, ChatIcon, HomeIcon, MenuAlt4Icon, ChevronRightIcon, ChevronLeftIcon, AtSymbolIcon, QuestionMarkCircleIcon, ChatAltIcon, GiftIcon } from "@heroicons/vue/outline";
export default {
  name: "App",
  components: { card, bouton, ArchiveIcon, BellIcon, AdjustmentsIcon, SearchIcon, UserAddIcon, ChatIcon, HomeIcon, MenuAlt4Icon, ChevronRightIcon, ChevronLeftIcon, AtSymbolIcon, QuestionMarkCircleIcon, ChatAltIcon, GiftIcon,  IconLogo},
};
</script>


