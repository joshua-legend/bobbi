
type CompanyTree = {
    name: string,
    sector: string,
    subsidiary ?: CompanyTree[],
};

const SAMSUNG_COMPANY: CompanyTree[] = [
    {
        name: "samsung",
        sector: "electronics",
        subsidiary : [
            {
                name: "samsung_electronics",
                sector: "electronics"
            },
            {
                name: "samsung_electro-mechanics",
                sector: "mechanics"
            }
        ]
    },
    {
        name: "samsung",
        sector: "finance",
        subsidiary : [
            {
                name: "samsung_life-insurance",
                sector: "insurance"
            },
            {
                name: "samsung_fire-marine-insurance",
                sector: "insurance"
            },
            {
                name: "samsung_card",
                sector: "card"
            },
        ]
    },
    {
        name: "shilla",
        sector: "tourism",
        subsidiary : [
            {
                name: "shilla-HM",
                sector: "tourism",
                subsidiary: [
                    {
                        name: "kwanghwa",
                        sector: "tourism",
                    }
                ]
            },
        ]
    },
];

type CompanyItem = {
    name: string,
    sector: string,
    id: string,
    depth: number,
    subsidiary?: CompanyItem[],
};

function makeCompanyTree(companies: CompanyTree[], depth = 0): CompanyItem[] {
    return companies.map((com,idx)=>({
        ...com,
        id: depth === 0 ? idx.toString() : `${depth}.${idx}`,
        depth,
        subsidiary:
            com.subsidiary && com.subsidiary.length > 0
                ? makeCompanyTree(com.subsidiary, depth+1)
                : undefined,
    }))
}

export const COMPANY_TREE: CompanyTree[] = makeCompanyTree(SAMSUNG_COMPANY);
