import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.jyotiverma.portfolio',
  appName: 'Jyoti Verma Portfolio',
  webDir: 'www',
  server: {
    url: 'https://my-portfolio-t7ht.vercel.app',
    cleartext: false,
  },
  android: {
    allowMixedContent: false,
  },
}

export default config
