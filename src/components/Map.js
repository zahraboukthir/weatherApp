import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, NavigationLineDirective, LayerDirective, Zoom, MarkersDirective, NavigationLine, NavigationLinesDirective, MarkerDirective, Marker, Inject } from '@syncfusion/ej2-react-maps';
export function Map() {
    return (<MapsComponent zoomSettings={{ zoomFactor: 4 }} centerPosition={{ latitude: 29.394708, longitude: -94.954653 }}>
            <Inject services={[Marker, NavigationLine, Zoom]}/>
                <LayersDirective>
                    <LayerDirective urlTemplate='https://tile.openstreetmap.org/level/tileX/tileY.png'>
                        <MarkersDirective>
                            <MarkerDirective visible={true} height={25} width={15} dataSource={[
        {
            latitude: 34.060620,
            longitude: -118.330491,
            name: "California"
        },
        {
            latitude: 40.724546,
            longitude: -73.850344,
            name: "New York"
        }
    ]}>
                            </MarkerDirective>
                        </MarkersDirective>
                        <NavigationLinesDirective>
                            <NavigationLineDirective visible={true} latitude={[34.060620, 40.724546]} longitude={[-118.330491, -73.850344]} color="blue" angle={90} width={5}/>
                        </NavigationLinesDirective>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>);
}