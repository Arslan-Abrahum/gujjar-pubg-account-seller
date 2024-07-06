import React from 'react'

function Loader() {
  return (
    <div class="flex items-center bg-black bg-opacity-100 justify-center h-screen">
        <div class="relative">
            <div class="h-24 w-24 rounded-full border-t-8 border-b-8 border-red-400"></div>
            <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-red-600 animate-spin">
            </div>
        </div>
    </div>
  )
}

export default Loader