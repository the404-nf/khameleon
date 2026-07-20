// Copyright (c) Meta Platforms, Inc. and affiliates.

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {khameleonStylex} from '@khameleon/build/vite';

export default defineConfig({
  plugins: [...khameleonStylex(), react()],
});
