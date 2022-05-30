<script setup>
import { reactive } from 'vue'

const data = reactive({
  warning: {
    title: '特別なお知らせ',
    card: '新型コロナウイルス感染拡大防止の取り組みとお知らせ',
  },
  menu: {
    title: 'おすすめ',
    info: 'ただいまのお時間のおすすめメニューをご紹介します',
    others: 'もっと見る',
    card: [
      {
        id: 1,
        img: '../src/assets/menu-001.jpeg',
        name: '1ひるまック ビッグマック® セット',
        price: '￥600',
      },
      {
        id: 2,
        name: '2ひるまック てりやきチキンフィレオ セット',
        img: '../src/assets/menu-002.jpeg',
        price: '￥550',
      },
      {
        id: 3,
        name: '3ひるまック ダブルチーズバーガー セット',
        img: '../src/assets/menu-003.jpeg',
        price: '￥550',
      },
      {
        id: 4,
        name: '4ひるまック ダブルチーズバーガー セット',
        img: '../src/assets/menu-003.jpeg',
        price: '￥550',
      },
      {
        id: 5,
        name: '5ひるまック ダブルチーズバーガー セット',
        img: '../src/assets/menu-003.jpeg',
        price: '￥550',
      },
    ],
  },
})
// const imgUrl = new URL('../assets/menu-001.jpeg', import.meta.url).hef
</script>
<template>
  <div class="min-w-[375px]">
    <div class="w-full">
      <div class="h-12 min-h-0 w-full shadow-lg">
        <div class="navbar-start">
          <div class="dropdown">
            <label
              tabindex="0"
              class="swap-rotate btn swap btn-circle border-none bg-white text-black hover:bg-white"
            >
              <input type="checkbox" class="hidden" />
              <!-- hamburger icon -->
              <svg
                class="swap-off bg-white text-black first-letter:fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path
                  d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
                />
              </svg>

              <!-- close icon -->
              <svg
                class="swap-on bg-white fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon
                  points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu rounded-box menu-compact mt-3 w-52 p-2 shadow"
            >
              <li><a>Homepage</a></li>
              <li><a>Portfolio</a></li>
              <li><a>About</a></li>
            </ul>
          </div>
        </div>
        <div class="navbar-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 414 372"
            width="54"
            height="48"
          >
            <defs>
              <path id="a" d="M0 .203h273.817V240H0z" />
            </defs>
            <g fill="none" fill-rule="evenodd">
              <path fill="#FFF" d="M0 0h414v372H0z" />
              <g transform="translate(70 66)">
                <mask id="b" fill="#fff">
                  <use xlink:href="#a" />
                </mask>
                <path
                  d="M196.81.202c-24.197 0-45.778 32.27-59.897 82.723C122.8 32.47 101.211.202 77.015.202 34.488.202-.001 107.566-.001 240.002h34.235c0-122.977 19.16-222.669 42.78-222.669 23.63 0 42.788 92.027 42.788 205.542h34.224c0-113.515 19.155-205.542 42.784-205.542 23.626 0 42.787 99.692 42.787 222.668h34.22C273.817 107.566 239.338.202 196.81.202"
                  fill="#FFBC0D"
                  mask="url(#b)"
                />
              </g>
            </g>
          </svg>
        </div>
        <div class="navbar-end">
          <button class="btn btn-ghost btn-circle">
            <svg
              width="32"
              height="32"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h48v48H0z"></path>
                <g fill="#2D2D2D" fill-rule="nonzero">
                  <path
                    d="M22 11.5c6.351 0 11.5 5.149 11.5 11.5S28.351 34.5 22 34.5 10.5 29.351 10.5 23 15.649 11.5 22 11.5zm0 3a8.5 8.5 0 100 17 8.5 8.5 0 000-17z"
                  ></path>
                  <path
                    d="M30.327 28.098L28.2 30.212l8.036 8.089 2.129-2.114z"
                  ></path>
                </g>
              </g>
            </svg>
          </button>
          <button class="btn btn-ghost btn-circle">
            <div class="">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.4196 6.72884H4.7963C4.08037 6.72884 3.5 6.14847 3.5 5.43254C3.5 5.34305 3.57255 5.27051 3.66204 5.27051H6.4196C7.48242 5.27051 8.41819 5.97069 8.71808 6.99032L12.181 18.7642C12.2983 19.1632 12.6645 19.4372 13.0804 19.4372H22.2037C22.9196 19.4372 23.5 20.0175 23.5 20.7335C23.5 20.823 23.4275 20.8955 23.338 20.8955H13.0804C12.0176 20.8955 11.0818 20.1953 10.7819 19.1757L7.31901 7.40181C7.20166 7.00283 6.83549 6.72884 6.4196 6.72884Z"
                  fill="#2D2D2D"
                ></path>
                <circle
                  cx="13.5"
                  cy="24.333"
                  r="1.77083"
                  stroke="#2D2D2D"
                  stroke-width="1.45833"
                ></circle>
                <circle
                  cx="21"
                  cy="24.333"
                  r="1.77083"
                  stroke="#2D2D2D"
                  stroke-width="1.45833"
                ></circle>
                <path
                  d="M8.91675 8.9165H25.2216C25.8014 8.9165 26.204 9.49388 26.0036 10.0379L23.701 16.2879C23.5803 16.6155 23.2681 16.8332 22.919 16.8332H11.0001"
                  stroke="#2D2D2D"
                  stroke-width="1.45833"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div class="mx-3 mt-4">
        <div class="carousel min-h-[296px] w-full">
          <div id="item1" class="carousel-item w-[100%]">
            <img src="../assets/ad-col-001.jpeg" class="w-full rounded-lg" />
          </div>
          <div id="item2" class="carousel-item w-[100%]">
            <img src="../assets/ad-col-002.jpg" class="w-full rounded-lg" />
          </div>
          <div id="item3" class="carousel-item w-[100%]">
            <img src="../assets/ad-col-003.jpg" class="w-full rounded-lg" />
          </div>
        </div>
        <div class="flex w-full justify-center gap-2 py-2">
          <a href="#item1" class="custom-btn btn btn-circle"></a>
          <a href="#item2" class="custom-btn btn btn-circle"></a>
          <a href="#item3" class="custom-btn btn btn-circle"></a>
        </div>
      </div>
      <div class="mt-8 px-4">
        <h2 class="mb-4 font-bold text-red-0">{{ data.warning.title }}</h2>
        <p class="rounded-xl bg-red-0 p-4 text-sm text-white">
          {{ data.warning.card }}
        </p>
      </div>
      <!-- 菜單 -->
      <div class="w-full">
        <div class="mt-8 px-4">
          <h2 class="mb-2 font-bold">{{ data.menu.title }}</h2>
          <p class="text-sm font-bold">
            {{ data.menu.info }}
          </p>
          <ul class="flex h-[630px] w-full flex-col flex-wrap gap-2">
            <li
              v-for="item in data.menu.card"
              :key="item.id"
              class="mb-1 w-[49%] rounded-xl"
            >
              <div class="card bg-base-100 p-2 shadow-md">
                <figure>
                  <img :src="item.img" alt="Shoes" />
                </figure>
                <div class="card-body p-0">
                  <h2 class="card-title text-sm">{{ item.name }}</h2>
                  <div class="flex justify-between">
                    <p class="text-xl font-bold">{{ item.price }}</p>
                    <div class="flex rounded-2xl border px-2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.4196 6.72884H4.7963C4.08037 6.72884 3.5 6.14847 3.5 5.43254C3.5 5.34305 3.57255 5.27051 3.66204 5.27051H6.4196C7.48242 5.27051 8.41819 5.97069 8.71808 6.99032L12.181 18.7642C12.2983 19.1632 12.6645 19.4372 13.0804 19.4372H22.2037C22.9196 19.4372 23.5 20.0175 23.5 20.7335C23.5 20.823 23.4275 20.8955 23.338 20.8955H13.0804C12.0176 20.8955 11.0818 20.1953 10.7819 19.1757L7.31901 7.40181C7.20166 7.00283 6.83549 6.72884 6.4196 6.72884Z"
                          fill="#2D2D2D"
                        ></path>
                        <circle
                          cx="13.5"
                          cy="24.333"
                          r="1.77083"
                          stroke="#2D2D2D"
                          stroke-width="1.45833"
                        ></circle>
                        <circle
                          cx="21"
                          cy="24.333"
                          r="1.77083"
                          stroke="#2D2D2D"
                          stroke-width="1.45833"
                        ></circle>
                        <path
                          d="M8.91675 8.9165H25.2216C25.8014 8.9165 26.204 9.49388 26.0036 10.0379L23.701 16.2879C23.5803 16.6155 23.2681 16.8332 22.919 16.8332H11.0001"
                          stroke="#2D2D2D"
                          stroke-width="1.45833"
                        ></path>
                      </svg>
                      <button class="text-xs">注文</button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
