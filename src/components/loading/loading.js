import React from 'react'
import './loading.css'

const IconLoading =()=>(
    <svg viewBox="141.566 160.639 360.442 337.344" 
        xmlns="http://www.w3.org/2000/svg">
    <defs>
    <linearGradient id="a" x1="334" x2="334" y1="-19" y2="329" gradientTransform="matrix(.63066 .77606 .66069 -.53836 109.01 372)" gradientUnits="userSpaceOnUse">
    <stop stop-color="rgba(255, 234, 0, 0)" offset="0"/>
    <stop stop-color="#fa0" offset="1"/>
    </linearGradient>
    </defs>
    <path transform="matrix(-.76933 .63886 -.63886 -.76933 758.9 262)" d="m165.34 336c0.033-79.854 42.677-153.77 111.83-193.7 74.508-43.017 158.48-37.635 223.66 0 65.185 37.635 111.79 107.66 111.83 193.7-0.033 79.854-42.677 153.77-111.83 193.7-74.509 43.017-158.48 37.635-223.66 0-65.186-37.635-111.79-107.66-111.83-193.7zm112.33 192.83c64.993 37.524 148.4 42.878 222.66 0 68.939-39.803 111.37-113.23 111.33-192.83 0.042-85.758-46.339-155.31-111.33-192.83-64.994-37.524-148.4-42.878-222.66 0-68.94 39.803-111.37 113.23-111.33 192.83-0.042 85.758 46.339 155.31 111.33 192.83zm195.18-338.06c51.837 29.928 83.812 85.368 83.845 145.22-0.042 64.49-34.985 117.02-83.845 145.22s-111.84 32.245-167.69 0c-51.837-29.928-83.812-85.368-83.845-145.22 0.042-64.49 34.985-117.02 83.845-145.22s111.84-32.245 167.69 0zm-167.19 0.866c-48.668 28.099-83.387 80.145-83.345 144.36-0.033 59.606 31.724 114.56 83.345 144.36 55.61 32.106 118.02 28.098 166.69 0 48.668-28.099 83.387-80.145 83.345-144.36 0.033-59.606-31.724-114.56-83.345-144.36-55.61-32.106-118.02-28.098-166.69 0z" fill="none"/>
    <path d="m498.49-2.508v257.02h-259.03v-257.02zm-258.03 256.02h257.03v-255.02h-257.03z" fill="none"/>
    <path transform="matrix(-1 0 0 -1 643.18 655.19)" d="m495.59 341.93c0-133.94-145-217.66-261-150.69-112.28 64.827-116.77 225.27-8.291 296.28l23.851-36.439c-33.542-22.733-55.584-61.156-55.584-104.73 0-69.821 56.601-126.42 126.42-126.42 68.341 0 124.02 54.227 126.35 122h48.256z" fill="url(#a)"/>
    </svg>
)

const Loading = () => {
    return (
        <div id="loading-conteiner">
            <span>Loading...</span>
            <div className="loading">
            <IconLoading />
            </div>
        </div>

)}

export default Loading