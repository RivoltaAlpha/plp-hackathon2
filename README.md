---
Pitch: https://hackathon2-pitch.vercel.app/
---

# Agritech Market Match

Empowering Kenyan Farmers with Real-Time Market Intelligence

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/agritech-kenya" target="_blank" alt="GitHub" title="GitHub Repository"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
Welcome to our pitch for Agritech Market Match, a solution dedicated to empowering Kenyan farmers with real-time market intelligence.
-->


# 1. The Problem

<div class="grid grid-cols-2 gap-10">
<div>

## Kenyan Farmers Face Critical Challenges

- <span v-mark.circle.red>Information asymmetry</span> in agricultural markets
- <span v-mark.underline.orange>Limited access</span> to price data across different markets
- <span v-mark.circle.yellow>Price exploitation</span> by intermediaries due to lack of transparency
- <span v-mark.underline.green>Post-harvest losses</span> from inefficient market timing decisions
- <span v-mark.circle.blue>Reduced bargaining power</span> with buyers

<div v-click>

### 40% of Kenya's produce spoils before reaching markets

</div>

</div>
<div>
<img src="https://images.unsplash.com/photo-1627393420059-dd1fb1c51f8d?q=80&w=1740&auto=format&fit=crop" class="rounded-lg shadow-xl" />
</div>
</div>

<!--
Small-scale farmers in Kenya operate at a significant disadvantage due to lack of market information transparency. Many make decisions about when and where to sell their produce based on limited or outdated information, leading to exploitation and lost income opportunities.
-->

---

# 2. Our Solution

<div class="grid grid-cols-2 gap-10">
<div>

## Agritech Market Match Platform

An AI-driven mobile platform connecting farmers to:

- <carbon:catalog /> **Real-time market prices** across Kenya
- <carbon:user-profile /> **Direct buyer connections** eliminating middlemen
- <carbon:chart-multitype /> **Price trend predictions** for informed planning
- <carbon:delivery /> **Logistics coordination** with transportation partners
- <carbon:notification /> **SMS/WhatsApp alerts** for optimal selling opportunities

</div>

<div>

![alt text](image.png)
</div>
</div>

<!--
Our platform addresses these challenges through an AI-driven mobile solution that delivers market intelligence directly to farmers. By providing real-time price information and connecting farmers directly with buyers, we eliminate information gaps and empower farmers to make optimal selling decisions.
-->

---

# 3. The Product

<div grid="~ cols-2 gap-8">
<div>

## Key Features

- **Mobile-First Design**: USSD, SMS & App interfaces for all device types
- **Multilingual Support**: English, Swahili & local dialects
- **Offline Capabilities**: Vital features work without continuous internet
- **AI-Powered Analytics**: Price predictions & market trend analysis
- **Secure Direct Messaging**: Connect farmers with verified buyers

</div>
<div>

<div class="flex justify-center">
<div class="relative w-[280px] h-[560px] border-8 rounded-[40px] border-gray-800 overflow-hidden shadow-xl">
  <div class="absolute top-0 w-[45%] h-[30px] bg-gray-800 left-[50%] -translate-x-1/2 z-10"></div>
  <div class="absolute top-0 h-full w-full bg-gradient-to-b from-green-500 to-green-700 p-5 pt-10 text-white">
    <div class="text-center font-bold text-xl mb-4">Agritech Market Match</div>
    <div class="bg-white/20 rounded-lg p-4 mb-3">
      <div class="text-sm font-bold">Today's Tomato Prices</div>
      <div class="text-xs">Nairobi Markets - May 25, 2025</div>
      <div class="flex justify-between mt-2">
        <div>Wakulima: KES 85/kg</div>
        <div class="text-green-300">↑ 5%</div>
      </div>
      <div class="flex justify-between mt-1">
        <div>Gikomba: KES 78/kg</div>
        <div class="text-red-300">↓ 2%</div>
      </div>
      <div class="flex justify-between mt-1">
        <div>Marikiti: KES 82/kg</div>
        <div class="text-green-300">↑ 3%</div>
      </div>
    </div>
    <div class="bg-white/20 rounded-lg p-4">
      <div class="text-sm font-bold">Buyer Alert</div>
      <div class="text-xs mt-1">3 new buyers looking for tomatoes in your area</div>
      <button class="bg-white text-green-700 rounded mt-2 w-full py-1 text-sm">View Buyers</button>
    </div>
  </div>
</div>
</div>

</div>
</div>

<!--
Our platform is designed with the Kenyan farmer in mind. We've built the service to work across various technology levels - from basic feature phones using USSD to smartphones with our app. The interface prioritizes simplicity and local relevance, with multilingual support and contextual market insights.
-->

---

# 4. Target Market

<div class="grid grid-cols-2 gap-4">
<div>

## Primary Users

- **5.4 million** smallholder farmers across Kenya
- 60% of Kenya's agricultural production comes from farms under 2 hectares
- Focus on producers of:
  - High-value perishables (tomatoes, vegetables, fruits)
  - Cash crops (coffee, tea, macadamia)
  - Staples (maize, beans, potatoes)

<div v-click class="mt-4 p-2 bg-green-100 dark:bg-green-900 rounded-lg">

**Early Adoption Strategy**: Initial focus on 6 counties in Kenya's central and rift valley regions with highest smartphone penetration and agricultural activity.

</div>

</div>
<div>

## Secondary Users

<div class="flex flex-col gap-3">
<div v-click class="p-3 border rounded-lg border-gray-400 dark:border-gray-600">
  <h3 class="font-bold">Produce Buyers</h3>
  <p class="text-sm">Local markets, hotels, restaurants, supermarkets, exporters and distributors seeking consistent supply</p>
</div>

<div v-click class="p-3 border rounded-lg border-gray-400 dark:border-gray-600">
  <h3 class="font-bold">Logistics Providers</h3>
  <p class="text-sm">Transportation companies offering services to move produce from farms to markets</p>
</div>

<div v-click class="p-3 border rounded-lg border-gray-400 dark:border-gray-600">
  <h3 class="font-bold">Agricultural Organizations</h3>
  <p class="text-sm">Cooperatives, NGOs, and government extension services supporting farmers</p>
</div>
</div>

</div>
</div>

<!--
We're targeting Kenya's massive smallholder farming community - the backbone of the country's agricultural sector. Our initial focus will be on farmers growing high-value perishable crops as they stand to gain the most immediate value from market timing intelligence. Our phased county-by-county rollout strategy ensures we can properly support users and iterate based on feedback.
-->

---

# 5. Market Size

<div class="grid grid-cols-3 gap-4">

<div class="p-4 border rounded-lg">
  <div class="text-4xl font-bold text-green-600">$10B</div>
  <div>Kenya's annual agricultural output</div>
</div>

<div class="p-4 border rounded-lg">
  <div class="text-4xl font-bold text-green-600">5.4M</div>
  <div>Smallholder farmers across Kenya</div>
</div>

<div class="p-4 border rounded-lg">
  <div class="text-4xl font-bold text-green-600">65%</div>
  <div>Of workforce employed in agriculture</div>
</div>

</div>

<div class="mt-8 grid grid-cols-2 gap-10">
<div>

## Serviceable Available Market (SAM)

- **2.7M farmers** with mobile phone access
- **$150M** annual potential revenue from subscriptions & service fees
- **420,000** farmers in initial target counties

</div>

<div>

```mermaid
pie title Mobile Connectivity Among Kenyan Farmers
    "Basic Phones" : 42
    "Feature Phones" : 40
    "Smartphones" : 18
```

</div>
</div>

<!--
Kenyan agriculture represents a massive market opportunity. The sector contributes about 33% of the country's GDP, with millions of smallholder farmers participating. Our platform addresses a critical information gap that currently costs these farmers billions in lost income opportunities. By providing market intelligence, we can capture value from a significant portion of the country's agricultural transactions.
-->

---

# 6. Competitors

<div class="grid grid-cols-3 gap-4">

<div v-click class="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">
  <h3 class="font-bold">Traditional Media</h3>
  <ul class="text-sm mt-2">
    <li>Radio price broadcasts</li>
    <li>Government bulletins</li>
    <li>Newspaper market reports</li>
  </ul>
  <div class="mt-3 text-xs text-gray-600 dark:text-gray-400">Limitations: Outdated, generic information without personalization</div>
</div>

<div v-click class="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">
  <h3 class="font-bold">Digital Platforms</h3>
  <ul class="text-sm mt-2">
    <li>M-Farm</li>
    <li>Twiga Foods</li>
    <li>Digital Green</li>
  </ul>
  <div class="mt-3 text-xs text-gray-600 dark:text-gray-400">Limitations: Limited coverage areas, focus on specific crops, high barriers to entry</div>
</div>

<div v-click class="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">
  <h3 class="font-bold">Middlemen Networks</h3>
  <ul class="text-sm mt-2">
    <li>Local brokers</li>
    <li>Aggregation centers</li>
    <li>Rural buying agents</li>
  </ul>
  <div class="mt-3 text-xs text-gray-600 dark:text-gray-400">Limitations: Exploit information asymmetry, take excessive margins, unreliable</div>
</div>

</div>

<div class="mt-8">

## Competitive Landscape Analysis

```mermaid
quadrantChart
    title Market Position of Agricultural Information Services in Kenya
    x-axis Low Tech --> High Tech
    y-axis Low Reach --> High Reach
    quadrant-1 "Market Opportunity"
    quadrant-2 "Market Leaders"
    quadrant-3 "Niche Players"
    quadrant-4 "Tech Innovators"
    "Traditional Media": [0.2, 0.7]
    "Middlemen": [0.3, 0.6]
    "M-Farm": [0.6, 0.4]
    "Twiga Foods": [0.7, 0.5]
    "Agritech Market Match": [0.8, 0.7]
```

</div>

<!--
While there are existing solutions in the market, none holistically address the comprehensive needs of Kenyan farmers. Traditional media broadcasts prices but lacks personalization. Existing digital platforms have limited geographical coverage or focus on specific value chains. Our approach combines the best elements of these solutions while adding AI-driven insights and a more inclusive technology stack.
-->

---

# 7. Competitive Advantage

<div class="grid grid-cols-2 gap-10">
<div>

## Our Key Differentiators

- **Inclusive Technology Stack**: Multi-channel access (USSD, SMS, App) supporting all phone types
- **Hyper-Local Focus**: Granular price data at specific market level, not just regional averages
- **AI-Powered Predictions**: Machine learning algorithms predict optimal selling times
- **Full Market Network**: Connect all stakeholders - farmers, buyers, transporters, not just price information
- **Offline Functionality**: Critical features work without continuous connectivity

</div>
<div>

<div v-click class="mb-6">

### Proprietary Market Data Collection

We've developed a network of on-the-ground data collectors, automated data scraping tools, and partnerships with key market operators to gather accurate, real-time price information.

</div>

<div v-click>

### Innovative Business Model

Our tiered subscription approach makes basic services accessible to all farmers while premium features generate sustainable revenue from those who derive the most value.

</div>

</div>
</div>

<style>
h1 {
  background-color: #10B981;
  background-image: linear-gradient(45deg, #10B981 10%, #047857 50%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
Our competitive advantage stems from our deep understanding of the Kenyan agricultural context. We've designed a solution that works within existing technological constraints while delivering superior value. Our multi-channel approach ensures no farmer is left behind regardless of their technology access level, and our AI-driven insights provide value that no competitor currently offers.
-->

---

# 8. Traction & Roadmap

<div class="grid grid-cols-2 gap-10">
<div>

## Current Traction

- **MVP Developed**: Functional prototype with core features tested
- **Pilot Program**: 1,200 farmers in Kiambu County using beta version
- **Initial Partners**: 3 agricultural cooperatives and 5 large buyers onboarded
- **Data Collection**: Live market price tracking in 12 major markets

</div>
<div>

## User Feedback

<div class="text-sm italic bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
"Before using this app, I would sometimes travel 30km to the market only to find prices much lower than expected. Now I know exactly when to harvest and where to sell for the best price." - Mary W., Tomato farmer, Kiambu
</div>

<div v-click class="mt-3">

### Early Results

- 22% average increase in selling price for pilot users
- 30% reduction in post-harvest losses
- 85% user retention rate after 3 months

</div>

</div>
</div>

<div class="mt-6">

## Development Roadmap

```mermaid
gantt
    title Product Development Roadmap
    dateFormat  YYYY-MM
    section Phase 1
    MVP Development           :done,    des1, 2024-09, 2025-03
    Kiambu Pilot Program      :done,    des2, 2025-03, 2025-05
    section Phase 2
    Expansion to 6 Counties   :active,  des3, 2025-05, 2025-08
    Add Logistics Integration :active,  des4, 2025-05, 2025-09
    section Phase 3
    National Rollout          :         des5, 2025-09, 2026-03
    Add Financial Services    :         des6, 2025-11, 2026-02
    section Phase 4
    Regional Expansion        :         des7, 2026-03, 2026-09
```

</div>

<!--
We've already made significant progress in bringing our vision to reality. Our pilot in Kiambu County has demonstrated strong market fit, with farmers reporting substantial improvements in their selling prices. Our roadmap focuses on systematic expansion across Kenya's agricultural regions while continuously adding features that enhance the platform's value.
-->

---

# 9. Business Model

<div class="grid grid-cols-2 gap-10">
<div>

## Revenue Streams

- **Freemium Subscription Model**:
  - Basic: Free (limited market reports, SMS alerts)
  - Standard: KES 200/month (comprehensive market data)
  - Premium: KES 500/month (predictive insights, buyer matching)

- **Transaction Fees**: 2.5% commission on direct sales facilitated via platform

- **Data Monetization**: Aggregated market insights for agricultural businesses, government, and research

- **Advertising**: Targeted ads for agricultural inputs, services, and equipment

</div>
<div>

## Financial Projections (5-Year)

```mermaid
xychart-beta
title "Revenue Growth Forecast"
x-axis [Year 1, Year 2, Year 3, Year 4, Year 5]
y-axis "Revenue (KES millions)"
bar [12, 45, 98, 210, 350]
```

<div v-click>

### Key Metrics

- **CAC**: KES 250 per farmer
- **LTV**: KES 9,000 (over 3 years)
- **Projected Break-even**: Month 28
- **Year 5 Profit Margin**: 35%

</div>

</div>
</div>

<!--
Our business model is designed to create value for all stakeholders while ensuring sustainable growth. We've structured our revenue streams to make essential services accessible to all farmers while monetizing premium features for those who can afford them. Our multi-stream approach reduces dependency on any single revenue source and creates a resilient business model.
-->

---

# 10. Go-to-Market Strategy

<div class="grid grid-cols-2 gap-10">
<div>

## Phased Rollout Approach

1. **Phase 1**: Target 6 counties with highest agricultural output
   - Partner with 20+ agricultural cooperatives
   - Establish presence at local markets

2. **Phase 2**: Expand to 15 additional counties
   - Partner with county governments
   - Leverage existing agri-extension networks

3. **Phase 3**: National coverage across all 47 counties
   - Strategic partnerships with telecom providers
   - Integration with government agricultural services

</div>
<div>

## Customer Acquisition Strategy

- **Field Activation**: Market day demonstrations and farmer field schools

- **Strategic Partnerships**: Agricultural cooperatives, input suppliers, extension services

- **Mobile Network Bundling**: Zero-rated data access through telecom partnerships

- **Radio Campaigns**: Targeted content on popular farming programs

- **Referral Program**: KES 100 credit for each successful referral

</div>
</div>

<div v-click class="mt-6 p-3 bg-green-100 dark:bg-green-900 rounded-lg">

### Community Ambassador Program

Recruiting tech-savvy farmers as local ambassadors who earn commissions for onboarding and supporting other farmers in their communities. This creates employment while accelerating adoption.

</div>

<!--
Our go-to-market strategy recognizes the unique challenges of reaching rural farming communities. We'll combine digital and traditional outreach methods, leveraging trusted community networks and demonstrating clear value through in-person activations. Our phased approach ensures we can provide adequate support during the critical adoption phase.
-->

---

# 11. Our Ask

<div class="grid grid-cols-2 gap-10">
<div>

## Funding Requirements: $750,000

<div class="mt-4">

### Allocation of Funds

```mermaid
pie title Fund Allocation
    "Product Development" : 30
    "Market Expansion" : 25
    "Data Collection Network" : 20
    "Operations" : 15
    "Marketing" : 10
```

</div>

</div>
<div>

## Strategic Support Needed

<div v-click>

### Beyond Capital

- **Network Access**: Introductions to agricultural cooperatives and large produce buyers

- **Technical Expertise**: Guidance on scaling mobile infrastructure in rural areas

- **Government Relations**: Support navigating regulatory environment for agtech

- **Industry Partnerships**: Connections to telecom providers for data access partnerships

</div>

<div v-click class="mt-6 p-3 border border-green-500 dark:border-green-700 rounded-lg">

### Investment Timeline

Seed round closing by July 2025 with first tranche release in August 2025 to fund Phase 2 expansion to 6 counties.

</div>

</div>
</div>

<!--
We're seeking $750,000 in seed funding to accelerate our growth across key agricultural regions in Kenya. Beyond capital, we're looking for strategic partners who can help us navigate the complex agricultural ecosystem and provide mentorship as we scale. The funds will primarily be used to enhance our technology, expand our data collection capabilities, and fuel our market expansion efforts.
-->

---

# 12. Our Team

<div class="grid grid-cols-3 gap-6">

<div class="text-center">
  <div class="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden">
    <img src="https://randomuser.me/api/portraits/women/65.jpg" />
  </div>
  <h3 class="font-bold">Mwaniki Tifany</h3>
  <div class="text-sm text-gray-600 dark:text-gray-400">CEO & Co-founder</div>
  <div class="text-xs mt-2">MSc in Agricultural Economics, 10+ years in agricultural extension services</div>
</div>

<div class="text-center">
  <div class="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden">
    <img src="https://randomuser.me/api/portraits/women/45.jpg" />
  </div>
  <h3 class="font-bold">Sarah Kiarie</h3>
  <div class="text-sm text-gray-600 dark:text-gray-400">Head of Data</div>
  <div class="text-xs mt-2">Data scientist specializing in agricultural market intelligence</div>
</div>

</div>

<div class="mt-8 grid grid-cols-2 gap-6">
<div v-click>

## Our Why

Our team combines deep agricultural expertise with technical innovation. We're driven by a shared mission to use technology to solve one of the most persistent challenges facing Kenyan farmers - market access and price transparency. We've experienced these challenges firsthand through our families and communities.

</div>

</div>

<!--
Our team brings together complementary expertise across agriculture, technology, and data science. Our founders have both professional experience and personal connections to the agricultural challenges we're addressing. This gives us unique insight into building solutions that work for our target users. Our advisory board provides strategic guidance and opens doors to key partnerships.
-->

---

layout: center
class: text-center
---

# Thank You

## Connecting Farmers to Markets, Knowledge to Action

<div class="mt-10 text-xl">
  Contact: mwanikitiffany@gmail.com
</div>

<div class="mt-10">
  <div class="text-sm opacity-50">Agritech Market Match © 2025</div>
</div>
