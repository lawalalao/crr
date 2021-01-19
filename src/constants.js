export const deliveryStatusConstants = {
	STATUS_PROCESSING_PARCEL_DELIVERY_REQUEST: 'STATUS_PROCESSING_PARCEL_DELIVERY_REQUEST',
	STATUS_COLLECTING_PARCEL: 'STATUS_COLLECTING_PARCEL',
	STATUS_PARCEL_IN_DELIVERY: 'STATUS_PARCEL_IN_DELIVERY',
	STATUS_PARCEL_DELIVERED: 'STATUS_PARCEL_DELIVERED',
	STATUS_PARCEL_NOT_DELIVERED_RECIPIENT_ABSENT: 'STATUS_PARCEL_NOT_DELIVERED_RECIPIENT_ABSENT',
	STATUS_PARCEL_NOT_DELIVERED_OTHER_REASON: 'STATUS_PARCEL_NOT_DELIVERED_OTHER_REASON'
}

export const deliveryStatusStateMachine = {
	initial: deliveryStatusConstants.STATUS_COLLECTING_PARCEL,
	STATUS_COLLECTING_PARCEL: {
		value: deliveryStatusConstants.STATUS_COLLECTING_PARCEL,
		nextStates: [{value: deliveryStatusConstants.STATUS_PARCEL_IN_DELIVERY, btnValue: 'Colis récupéré'}]
	},
	STATUS_PARCEL_IN_DELIVERY: {
		nextStates: [
			{value: deliveryStatusConstants.STATUS_PARCEL_DELIVERED, btnValue: 'Colis livré'},
			{
				value: deliveryStatusConstants.STATUS_PARCEL_NOT_DELIVERED_RECIPIENT_ABSENT,
				btnValue: 'Colis non livré (destinataire absent)'
			},
			{
				value: deliveryStatusConstants.STATUS_PARCEL_NOT_DELIVERED_OTHER_REASON,
				btnValue: 'Colis non livré (autre raison)'
			}]
	},
    STATUS_PARCEL_NOT_DELIVERED_RECIPIENT_ABSENT: {
        nextStates: [
            {value: deliveryStatusConstants.STATUS_PARCEL_IN_DELIVERY, btnValue: 'Redémarrez la course'}
        ]
    },
    STATUS_PARCEL_NOT_DELIVERED_OTHER_REASON: {
        nextStates: [
            {value: deliveryStatusConstants.STATUS_PARCEL_IN_DELIVERY, btnValue: 'Redémarrez la course'}
        ]
    }
}
