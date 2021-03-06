import React, { FC, useEffect, useRef, useState } from "react";
import Script from "next/script";

interface YaMapProps {
  center: [number, number];
  zoom?: number;
  lang?: string;
  className?: any;
}

interface MapProps {
  behaviors: any;
  controls: any;
  geoObjects: any;
}

export const YaMap: FC<YaMapProps> = ({
  center,
  zoom = 10,
  lang = "en_US",
  className,
}) => {
  const [map, setMap] = useState<MapProps | null>(null);
  const [placemark, setPlacemark] = useState(null);
  const mapContainer = useRef(null);
  const api = `//api-maps.yandex.ru/2.1/?load=package.standard&lang=${lang}`;

  useEffect(() => {
    // @ts-ignore
    if (window.ymaps && !map) {
      createMap();
    }

    if (map) {
      map.behaviors?.disable("scrollZoom");
      map.controls?.remove("rulerControl");
      map.controls?.remove("searchControl");
      map.controls?.remove("geolocationControl");
    }

    if (map && placemark) {
      map.geoObjects?.add(placemark);
    }
  }, [map, placemark]);

  const createMap = () => {
    if (mapContainer?.current) {
      const mapInit = () => {
        setMap(
          // @ts-ignore
          new window.ymaps.Map(mapContainer.current, {
            center: center,
            zoom: zoom,
          })
        );

        setPlacemark(
          // @ts-ignore
          new window.ymaps.Placemark(
            center,
            {},
            {
              iconLayout: "default#image",
              iconImageHref: "/images/marker.svg",
              iconImageSize: [30, 42],
            }
          )
        );
      };

      // @ts-ignore
      window.ymaps.ready(mapInit);
    }
  };

  if (!center || !center[0] || !center[1]) return null;

  return (
    <>
      <Script src={api} strategy="lazyOnload" onLoad={createMap} />
      <div ref={mapContainer} className={className?.map}>
        <div className={className?.mapOverlay} />
      </div>
    </>
  );
};
