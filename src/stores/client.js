import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useClientStore = defineStore('client', () => {
    const clients = [
        {
            id: 0,
            name: "Wendys",
            imgSrc: "wendys-logo.svg",
            sites: [{ name: "Suncrest", address: "351 Patteson Drive, Morgantown, WV 26505" },
            { name: "Sabraton", address: "1505 Earl L Core Rd, Morgantown, WV 26505" },
            { name: "Glenmark Center", address: "306 Venture Dr, Morgantown, WV 26508" },
            { name: "University Town Center", address: "101 Sesame Dr, Morgantown, WV 26501" }],
            ppoc: { name: "Bob (Big Bob) Rickleston", phone: "(304) 598-3793", email: "bigbob@email.com" },
            opoc: ["Jane Doe", "Harry Johnson"]
        },
        {
            id: 1,
            name: "Bass Pro Shops",
            imgSrc: "bass-pro-shops-logo.png",
            sites: [{ name: "University Town Center", address: "200 Bass Pro Dr, Morgantown, WV 26501" }],
            ppoc: { name: "Gerald Hoejansen", phone: "(681) 285-6400", email: "itsgeraldhoe@email.com" },
            opoc: []
        },
    ];
    const getClient = (id) => clients[id]

    return { clients, getClient };
})
