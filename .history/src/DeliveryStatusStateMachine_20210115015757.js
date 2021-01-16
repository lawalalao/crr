import { StateMachine } from 'use-state-machine'

export default new StateMachine({
  initial: 'STATUS_PROCESSING_PARCEL_DELIVERY_REQUEST',
  STATUS_PROCESSING_PARCEL_DELIVERY_REQUEST: {
    toStatusCollectingParcel: 'STATUS_COLLECTING_PARCEL',
    value: 'Démarrez la course'
  },
  STATUS_COLLECTING_PARCEL: {
    toStatusParcelInDelivery: 'STATUS_PARCEL_IN_DELIVER',
    value: 'Colis récupéré'
  },
  STATUS_PARCEL_IN_DELIVERY: {
    toStatusParcelDelivered: 'STATUS_PARCEL_DELIVERED',
    toStatusParcelNotDeliveredRecipientAbsent: "STATUS_PARCEL_NOT_DELIVERED_RECIPIENT_ABSENT",
    toStatusParcelNotDeliveredOtherReason: "STATUS_PARCEL_NOT_DELIVERED_OTHER_REASON",
    value: {
        STATUS_PARCEL_DELIVERED: "Colis livré",
        STATUS_PARCEL_NOT_DELIVERED_RECIPIENT_ABSENT:"Colis non livré(destinataire absent)",
        STATUS_PARCEL_NOT_DELIVERED_OTHER_REASON: "Colis non livré(autre raison)"
    }
  }
})
