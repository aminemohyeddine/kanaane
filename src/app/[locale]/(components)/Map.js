'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import L from 'leaflet';
import { useTranslations } from 'next-intl';

// Fix for leaflet marker icons in Next.js
delete L.Icon.Default.prototype?._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function Map() {
  const t = useTranslations('locationPage');

  return (
    <MapContainer
      center={[33.567838825768895, -7.555770999458251]}
      zoom={15}
      className="h-[400px] w-full"
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[33.567838825768895, -7.555770999458251]}>
        <Popup>
          <b>{t('title')}</b>
          <br />
          <br />
          {t('location')}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
