import { FC } from 'react';
import { AdWidgetProps } from '@/widgets/Ad/model/types';
import cls from './ad.module.scss';

export const AdWidget: FC<AdWidgetProps> = ({ ads }) => {
  return (
    <div className={cls.adContainer}>
      {ads.map((ad, index) => (
        <a key={index} href={ad.link} target="_blank" rel="noopener noreferrer" className={cls.ad}>
          <img src={ad.image} alt={ad.alt} className={cls.adImage} />
        </a>
      ))}
    </div>
  );
};
