import { FC } from 'react';
import styles from './Space.module.css';

type Props = {
  spaceId: string;
};

const Space: FC<Props> = ({ spaceId }) => {
  console.log('space_id', spaceId);
  // getNodes - получить список статусов
  // getPossibleEdjes - получить список возможных перемещений
  // getTasksBySpaceId - получить список карточек по space_id

  return <div className={styles.space}></div>;
};

export default Space;

// '@components': path.resolve(__dirname, 'src/components'),
// '@globals': path.resolve(__dirname, 'src/globals'),
// '@ui': path.resolve(__dirname, 'src/ui'),

// {
//   "compilerOptions": {
//     "target": "es5",
//     "lib": ["dom", "dom.iterable", "esnext"],
//     "allowJs": true,
//     "skipLibCheck": true,
//     "esModuleInterop": true,
//     "allowSyntheticDefaultImports": true,
//     "strict": true,
//     "forceConsistentCasingInFileNames": true,
//     "noFallthroughCasesInSwitch": true,
//     "module": "esnext",
//     "moduleResolution": "node",
//     "resolveJsonModule": true,
//     "isolatedModules": true,
//     "noEmit": true,
//     "jsx": "react-jsx",
//     "baseUrl": "./src",
//     "paths": {
//       "@components/": ["components/"],
//       "@components/*": ["components/*"],
//       "@globals/": ["globals/"],
//       "@globals/*": ["globals/*"],
//       "@ui/": ["ui/"],
//       "@ui/*": ["ui/*"]
//     }
//   },
//   "include": ["src"]
// }
