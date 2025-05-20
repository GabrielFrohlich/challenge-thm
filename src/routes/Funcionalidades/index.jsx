import './Funcionalidades.css';

import {
    MapPin,
    AlertTriangle,
    BookOpenCheck,
    History,
    Users,
    ShieldCheck
}

    from 'lucide-react';

import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
}

    from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Funcionalidades() {
    return (<div className="func-container" > <div className="func-wrapper" > <h1 className="func-title" >Funcionalidades</h1> <p className="func-text" > Nosso sistema fornece informações atualizadas sobre desastres naturais para manter você e sua comunidade seguros. Veja as principais funcionalidades: </p> <ul className="func-list" > <li> <AlertTriangle size={
        24
    }

        color="#22d3ee" /> <span> <strong>Alertas em Tempo Real:</strong> Notificações sobre terremotos, enchentes e incêndios. </span> </li> <li> <MapPin size={
            24
        }

            color="#22d3ee" /> <span> <strong>Mapas Interativos:</strong> Visualização de eventos e rotas de evacuação. </span> </li> <li> <History size={
                24
            }

                color="#22d3ee" /> <span> <strong>Histórico de Ocorrências:</strong> Registros e estatísticas por região. </span> </li> <li> <BookOpenCheck size={
                    24
                }

                    color="#22d3ee" /> <span> <strong>Guias de Prevenção:</strong> Dicas práticas de como agir em emergências. </span> </li> <li> <Users size={
                        24
                    }

                        color="#22d3ee" /> <span> <strong>Relatos da Comunidade:</strong> Usuários compartilham relatos e imagens. </span> </li> <li> <ShieldCheck size={
                            24
                        }

                            color="#22d3ee" /> <span> <strong>Integração com Defesa Civil:</strong> Dados oficiais verificados. </span> </li> </ul> <h2 className="func-map-title" >Exemplo de Mapa Interativo</h2> <MapContainer center={
                                [-3.745, -38.523]
                            }

                                zoom={
                                    5
                                }

                                scrollWheelZoom={
                                    false
                                }

                                className="func-map" > <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution="© OpenStreetMap contributors"

            /> <Marker position={
                [-3.745, -38.523]
            }

            > <Popup> Possível área de risco detectada. </Popup> </Marker> </MapContainer> <p className="func-footer" > Novas funcionalidades estão sendo desenvolvidas continuamente para garantir maior segurança. </p> </div> </div>);
}

export default Funcionalidades;