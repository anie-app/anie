import styles from './falcon.module.css';

/* eslint-disable-next-line */
export interface FalconProps {}

export function Falcon(props: FalconProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Falcon!</h1>
    </div>
  );
}

export default Falcon;
