
export async function registerBusiness(businessName, description, address, email, password) {
    let data = {
        "name": businessName,
        "description": description,
        "address": address,
        "contactEmail": email,
        "password": password
    }

    const res = await fetch('http://localhost:8085/api/business', {
        method: 'post',
        'headers': {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })

    return res.json()
}

export async function generateWallet(businessId) {
    let data = {
        'businessId': businessId
    }

    const res = await fetch('http://localhost:8085/api/generateWallet', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return res.json()
}