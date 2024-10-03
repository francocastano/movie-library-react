import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    base:"https://francocastano.github.io/movie-library-react/",
  plugins: [react()],
})
