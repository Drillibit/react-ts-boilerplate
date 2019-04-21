export interface meetUpState {
    time: string
    totalCost: number
    description: string
    place: {
        address: string
        price: number
    },
    ownerId: number
    walletInformation?: number | string
    
};

export interface actionType {
    type: string
    payload?: any
}