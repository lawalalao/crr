
import { StateMachine } from 'use-state-machine'

new StateMachine({
  initial: 'STATUS_PROCESSING_PARCEL_DELIVERY_REQUEST',
  STATUS_PROCESSING_PARCEL_DELIVERY_REQUEST: {
    to: ['STATUS_COLLECTING_PARCEL'],
    value: 'Démarrez la course'
  },
  STATUS_COLLECTING_PARCEL: {
    to: 'STATUS_PARCEL_IN_DELIVERY',
    value: 'Colis récupéré'
  },
  STATUS_PARCEL_IN_DELIVERY: {
    to: ['STATUS_PARCEL_DELIVERED',"STATUS_PARCEL_NOT_DELIVERED_RECIPIENT_ABSENT","STATUS_PARCEL_NOT_DELIVERED_OTHER_REASON"],
    value: {
        STATUS_PARCEL_DELIVERED: "Colis livré",
        STATUS_PARCEL_NOT_DELIVERED_RECIPIENT_ABSENT:"Colis non livré(destinataire absent)",
        STATUS_PARCEL_NOT_DELIVERED_OTHER_REASON: "Colis non livré(autre raison)"
    }
  }
})