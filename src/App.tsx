import { useState } from 'react';
import { X, Share2, ShoppingCart, MoreHorizontal, Star, ChevronRight, Store, MessageCircle, CreditCard, Package, CheckCircle, Ticket, ShieldCheck, Play, CircleUser, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Função para redirecionar para o link de pagamento
  const handleBuyNow = () => {
    window.location.href = 'https://pay.safetypag.shop/68eda37bdd08eb4fb17aceb6';
  };

  // Função para adicionar ao carrinho (pode redirecionar ou fazer outra ação)
  const handleAddToCart = () => {
    // Aqui você pode adicionar lógica para o carrinho
    // Por enquanto vou redirecionar para o mesmo link
    window.location.href = 'https://pay.safetypag.shop/68eda37bdd08eb4fb17aceb6';
  };

  // Dados para as imagens do produto (7.webp ao 15.webp)
  const productImages = [
    {
      id: 1,
      src: "7.webp",
      alt: "Bicicleta Ergométrica - Vista frontal"
    },
    {
      id: 2,
      src: "8.webp",
      alt: "Bicicleta Ergométrica - Vista lateral"
    },
    {
      id: 3,
      src: "9.webp",
      alt: "Bicicleta Ergométrica - Detalhes do banco"
    },
    {
      id: 4,
      src: "10.webp",
      alt: "Bicicleta Ergométrica - Roda de inércia"
    },
    {
      id: 5,
      src: "11.webp",
      alt: "Bicicleta Ergométrica - Painel de controle"
    },
    {
      id: 6,
      src: "12.webp",
      alt: "Bicicleta Ergométrica - Estrutura"
    },
    {
      id: 7,
      src: "13.webp",
      alt: "Bicicleta Ergométrica - Detalhes técnicos"
    },
    {
      id: 8,
      src: "14.webp",
      alt: "Bicicleta Ergométrica - Vista superior"
    },
    {
      id: 9,
      src: "15.webp",
      alt: "Bicicleta Ergométrica - Em uso"
    }
  ];

  // Dados para os vídeos dos criadores
  const creatorVideos = [
    {
      id: 1,
      image: "/1.webp",
      creator: "TechReview",
      name: "TechReview..."
    },
    {
      id: 2,
      image: "/2.webp", 
      creator: "GadgetLover",
      name: "GadgetLover..."
    },
    {
      id: 3,
      image: "/3.webp",
      creator: "UnboxMaster",
      name: "UnboxMaster..."
    },
    {
      id: 4,
      image: "/4.webp",
      creator: "DailyTech",
      name: "DailyTech..."
    }
  ];

  // Dados para as avaliações com fotos reais
  const reviews = [
    {
      id: 1,
      name: "Marcos Pereira",
      photo: "Marcos.jfif",
      rating: 5,
      comment: "Excelente bicicleta! A roda de inércia de 13kg proporciona um pedal muito suave. Estou usando há 2 meses e superou minhas expectativas.",
      initials: "MP"
    },
    {
      id: 2,
      name: "Ana Silva",
      photo: "Ana.jfif",
      rating: 4,
      comment: "Muito boa para treinos em casa. O ajuste de carga é preciso e a estrutura é bem robusta. Recomendo!",
      initials: "AS"
    },
    {
      id: 3,
      name: "Ricardo Costa",
      photo: "Ricardo.jfif",
      rating: 5,
      comment: "Perfeita para quem busca qualidade. A roda de inércia faz toda diferença no treino. Montagem foi simples e rápida.",
      initials: "RC"
    },
    {
      id: 4,
      name: "Fernanda Martins",
      photo: "Fernanda.jfif",
      rating: 3,
      comment: "Boa bicicleta, mas o banco poderia ser mais confortável. No geral atende bem para treinos diários.",
      initials: "FM"
    }
  ];

  // Funções para navegar o slider de imagens
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  // Função para renderizar estrelas
  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star 
            key={i} 
            size={12} 
            fill={i <= rating ? "#FFD700" : "none"} 
            color="#FFD700" 
            className={i <= rating ? "" : "opacity-50"}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans" style={{ fontFamily: "'TikTok Sans', sans-serif" }}>
     
      {/* Header */}
      <header className="bg-black px-4 py-3 flex items-center justify-between border-b border-gray-900">
        <button className="p-2">
          <X size={24} />
        </button>
        <div className="flex items-center gap-4">
          <Share2 size={24} />
          <ShoppingCart size={24} />
          <MoreHorizontal size={24} />
        </div>
      </header>

      {/* Product Image Slider */}
      <div className="relative">
        <div className="aspect-square relative overflow-hidden">
          <img
            src={productImages[currentImageIndex].src}
            alt={productImages[currentImageIndex].alt}
            className="w-full h-full object-cover transition-transform duration-300"
          />
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white"
          >
            <ChevronRightIcon size={20} />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
            {currentImageIndex + 1} / {productImages.length}
          </div>
        </div>

        {/* Image Thumbnails */}
        <div className="flex gap-2 px-4 py-2 overflow-x-auto bg-gray-900">
          {productImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setCurrentImageIndex(index)}
              className={`flex-shrink-0 w-16 h-16 rounded border-2 ${
                index === currentImageIndex ? 'border-[#ff2953]' : 'border-gray-700'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Price Section */}
      <div className="bg-black px-4 py-4">
       <div className="flex items-baseline gap-2 mb-2">
        <span className="bg-[#fa2a51] text-white text-xs px-2 py-1 rounded font-bold">-95%</span>
        <span className="text-[#f55f79] text-sm">A partir de</span>
        <span className="text-[#f55f79] text-xl font-bold">R$ 39,90</span>
        <span className="text-gray-500 text-sm line-through">R$ 2.109,99</span>
      </div>

        <div className="flex items-center gap-2 text-sm mb-3">
          <CreditCard size={16} />
          <span>3x R$ 13,90</span>
          <ChevronRight size={16} />
        </div>

        <div className="rounded-lg p-1 flex items-center justify-between mb-3"
          style={{ backgroundColor: '#611c28' }} >
          <div className="flex items-center gap-2">
            <Ticket size={20} className="text-[#f9576b]" />
            <span className="text-sm text-[#ffc9d2]">Compre R$ 39 e ganhe 10% de desconto</span>
          </div>
        </div>

        {/* Product Title */}
        <h2 className="text-white text-base font-normal mb-2 leading-tight">
         Bicicleta Ergométrica Gallant Elite Spinning Roda de Inércia 13KG até 110KG Mecânica GSB13HBTA-PT
        </h2>

        <div className="flex items-center gap-2 mb-3">
          <Star size={18} fill="#FFD700" color="#FFD700" />
          <span className="text-lg">4.6</span>
          <span className="text-gray-400">(108)</span>
          <span className="text-gray-400">3767 vendidos</span>
        </div>

        {/* Shipping Info */}
        <div className="py-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Package size={20} />
              <span className="bg-teal-700 text-white text-xs px-2 py-1 rounded">Frete grátis</span>
              <span className="text-sm text-gray-300">Receba em até 10 dias </span>
            </div>
            <ChevronRight size={20} />
          </div>
          <div className="text-sm text-gray-400 pl-7">Taxa de envio: R$ 0,00</div>
        </div>

      </div>

      {/* Tabs */}
      <div className="bg-black border-t border-gray-800 sticky top-0 z-10">
        <div className="flex items-center px-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-3 text-sm whitespace-nowrap border-b-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-white text-white'
                : 'border-transparent text-gray-400'
            }`}
          >
            Visão geral
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-4 py-3 text-sm whitespace-nowrap border-b-2 transition-colors ${
              activeTab === 'reviews'
                ? 'border-white text-white'
                : 'border-transparent text-gray-400'
            }`}
          >
            Avaliações
          </button>
          <button
            onClick={() => setActiveTab('description')}
            className={`px-4 py-3 text-sm whitespace-nowrap border-b-2 transition-colors ${
              activeTab === 'description'
                ? 'border-white text-white'
                : 'border-transparent text-gray-400'
            }`}
          >
            Descrição
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="pb-32">
        {activeTab === 'overview' && (
          <div className="bg-black px-4 py-4">
            {/* TikTok Shop Services */}
            <div className="bg-[#37210a] rounded-lg p-4 mb-4 w-full">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center">
                    <ShieldCheck size={16} className="text-[#deb492]" />
                  </div>
                  <span className="text-sm font-medium text-white">Serviços do TikTok Shop</span>
                </div>
                <ChevronRight size={20} className="text-white" />
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="flex items-center gap-1">
                  <CheckCircle size={10} className="text-[#e2d4c7]" />
                  <span className="text-[#e2d4c7]">Devolução gratuita</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle size={10} className="text-[#e2d4c7]" />
                  <span className="text-[#e2d4c7]">Cupom por perda ou dano</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle size={10} className="text-[#e2d4c7]" />
                  <span className="text-[#e2d4c7]">Pagamento seguro</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle size={10} className="text-[#e2d4c7]" />
                  <span className="text-[#e2d4c7]">Cupom por atraso na coleta</span>
                </div>
              </div>
            </div>

            {/* Offers */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">Ofertas</h3>
                <ChevronRight size={20} className="text-white" />
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {/* Cupom de envio */}
                <div className="flex-shrink-0 bg-[#121c1d] rounded-lg p-4 w-72 border border-gray-800">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-sm font-medium text-white">Cupom de envio</h4>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">Desconto de R$ 20 no frete em pedidos acima de R$ 10</p>
                  <div className="flex items-center justify-between">
                    <button className="bg-[#10c5cd] text-black text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#0db4bc] transition-colors">
                      Resgatar
                    </button>
                  </div>
                </div>
                
                {/* Cupom de compra */}
                <div className="flex-shrink-0 bg-[#121c1d] rounded-lg p-4 w-72 border border-gray-800">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-sm font-medium text-white">Cupom de compra</h4>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">Desconto de R$ 5 em pedidos acima de R$ 50</p>
                  <div className="flex items-center justify-between">
                    <button className="bg-[#10c5cd] text-black text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#0db4bc] transition-colors">
                      Resgatar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Creator Videos */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white mb-3">Vídeos dos criadores (30+)</h3>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {creatorVideos.map((video) => (
                  <div key={video.id} className="flex-shrink-0 w-32 h-44 bg-gray-800 rounded-lg relative overflow-hidden">
                    <img
                      src={video.image}
                      alt={`Video ${video.creator}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play size={14} className="text-white ml-0.5" fill="white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2 flex items-center gap-1">
                      <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center">
                        <CircleUser size={12} className="text-white" />
                      </div>
                      <span className="text-xs text-white">{video.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Preview */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">Avaliações dos clientes (108)</h3>
                <button className="text-gray-400 text-sm flex items-center gap-1">
                  Ver mais
                  <ChevronRight size={16} />
                </button>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl font-bold text-white">4.6</span>
                <span className="text-gray-400">/5</span>
                <div className="flex">
                  {[1, 2, 3, 4].map((i) => (
                    <Star key={i} size={20} fill="#FFD700" color="#FFD700" />
                  ))}
                  <Star size={20} fill="#FFD700" color="#FFD700" className="opacity-50" />
                </div>
              </div>

              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-800 pb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden bg-gray-700">
                        <img 
                          src={review.photo} 
                          alt={review.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback para iniciais caso a imagem não carregue
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div 
                          className="w-full h-full hidden items-center justify-center text-white text-xs font-bold"
                          style={{ 
                            backgroundColor: 
                              review.name === 'Marcos Pereira' ? '#3b82f6' :
                              review.name === 'Ana Silva' ? '#10b981' :
                              review.name === 'Ricardo Costa' ? '#8b5cf6' : '#ef4444'
                          }}
                        >
                          {review.initials}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="text-sm font-medium text-white">{review.name}</div>
                          {renderStars(review.rating)}
                        </div>
                        <div className="text-xs text-gray-400 mb-2">Item: Bicicleta Ergométrica Gallant Elite Spinning Roda de Inércia 13KG até 110KG Mecânica GSB13HBTA-PT</div>
                        <p className="text-sm text-white">
                          {review.comment}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="bg-black px-4 py-4">
            {/* Store Info */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-800">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#36200a' }}
                  >
                    <span className="text-[#deb492] font-bold text-xs">FitFast</span>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-white">Tudo Para seu treino</h3>
                    <p className="text-sm text-gray-400">3865 vendido(s)</p>
                  </div>
                </div>
                <button className="bg-gray-800 text-white px-6 py-2 rounded text-sm font-medium">
                  Visitar
                </button>
              </div>

            {/* More from Store */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-medium text-white">Mais desta loja</h3>
                <ChevronRight size={20} className="text-white" />
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2">
                <div className="flex-shrink-0 w-40 bg-orange-900/40 rounded-lg p-4">
                  <div className="text-orange-500 text-3xl mb-2 font-bold">⚡</div>
                  <div className="text-orange-500 text-lg font-bold mb-1">Até 66%</div>
                  <div className="text-orange-500 text-sm mb-3">de desconto</div>
                  <div className="text-xs text-gray-400">Termina em 1 dia</div>
                </div>
                <div className="flex-shrink-0 w-40  rounded-lg p-2">
                  <img src="6.webp" alt="Product" className="w-full h-24 object-cover rounded mb-2" />
                  <div className="text-sm font-bold text-white">R$ 21,90</div>
                  <div className="text-xs text-red-500">-58%</div>
                </div>
                <div className="flex-shrink-0 w-40 rounded-lg p-2">
                  <img src="7.jfif" alt="Product" className="w-full h-24 object-cover rounded mb-2" />
                  <div className="text-sm font-bold text-white">R$ 13,59</div>
                  <div className="text-xs text-red-500">-66%</div>
                </div>
              </div>
            </div>

            {/* Product Description */}
            <div className="mb-6">
              <h3 className="text-base font-medium text-white mb-3">Sobre este produto</h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                A Bicicleta Ergométrica Gallant Elite Spinning é equipada com roda de inércia de 13KG, proporcionando um treino suave e eficiente. Sua estrutura robusta suporta até 110KG e o sistema mecânico garante durabilidade e performance.
              </p>
              <h4 className="text-sm font-medium text-white mb-2">Principais Benefícios:</h4>
              <p className="text-sm text-gray-300 mb-2">
                <strong>Roda de Inércia 13KG:</strong> Proporciona pedalada suave e contínua, simulando o feeling de uma bike de rua.
              </p>
              <p className="text-sm text-gray-300 mb-2">
                <strong>Capacidade de 110KG:</strong> Estrutura reforçada para maior segurança e durabilidade.
              </p>
              <p className="text-sm text-gray-300">
                <strong>Sistema Mecânico:</strong> Manutenção simples e baixo custo, ideal para uso doméstico.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'description' && (
          <div className="bg-black px-4 py-4">
            <h3 className="text-base font-medium text-white mb-3">Descrição do Produto</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Bicicleta Ergométrica Gallant Elite Spinning com Roda de Inércia 13KG, capacidade máxima de 110KG. 
              Design ergonômico e sistema mecânico de alta performance. Ideal para treinos cardiovasculares e 
              fortalecimento muscular. Perfeita para uso doméstico, academias e condomínios.
            </p>
          </div>
        )}
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 px-4 py-2 z-[9999]">
        <div className="flex items-center gap-2">
          <button className="flex flex-col items-center justify-center gap-0.5 px-3">
            <Store size={16} className="text-white" />
            <span className="text-xs text-white">Loja</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-0.5 px-3">
            <MessageCircle size={16} className="text-white" />
            <span className="text-xs text-white">Chat</span>
          </button>
          <button 
            onClick={handleAddToCart}
            className="flex-1 bg-[#313131] text-[#f9f9f9] h-10 rounded-md text-sm font-medium flex items-center justify-center leading-tight text-center"
          >
            Adicionar<br />ao carrinho
          </button>
          <button 
            onClick={handleBuyNow}
            className="flex-1 bg-[#ff2953] text-[#f9f9f9] h-10 rounded-md text-sm font-bold flex items-center justify-center"
          >
            Comprar Agora
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;