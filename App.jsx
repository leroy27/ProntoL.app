
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Home, Hammer, Paintbrush, Droplets, Plug, MessageCircle, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 text-white p-6 space-y-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <h1 className="text-3xl font-bold tracking-wide">ProntoLar Serviços</h1>
        <p className="text-blue-200 mt-2">Soluções rápidas e confiáveis para sua casa 🏠</p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[
          { name: "Elétrica", icon: <Plug size={28} /> },
          { name: "Hidráulica", icon: <Droplets size={28} /> },
          { name: "Pintura", icon: <Paintbrush size={28} /> },
          { name: "Montagem", icon: <Hammer size={28} /> },
          { name: "Reformas", icon: <Home size={28} /> },
          { name: "Outros", icon: <MessageCircle size={28} /> },
        ].map((service, index) => (
          <Card key={index} className="bg-white/10 backdrop-blur-md text-center border-none hover:bg-white/20 transition-all cursor-pointer">
            <CardContent className="flex flex-col items-center justify-center p-4 space-y-2">
              {service.icon}
              <p className="font-semibold text-white">{service.name}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <Card className="bg-white/10 backdrop-blur-md border-none">
          <CardContent className="space-y-4 p-4">
            <h2 className="text-xl font-bold text-center">Agende seu serviço</h2>
            <Input placeholder="Seu nome" className="bg-white/20 placeholder-white/80 text-white" />
            <Input placeholder="Endereço" className="bg-white/20 placeholder-white/80 text-white" />
            <Input placeholder="Serviço desejado" className="bg-white/20 placeholder-white/80 text-white" />
            <Input type="date" className="bg-white/20 text-white" />
            <Textarea placeholder="Descreva o problema ou envie observações" className="bg-white/20 placeholder-white/80 text-white" />
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold">Enviar pelo WhatsApp</Button>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        <Card className="bg-white/10 backdrop-blur-md border-none">
          <CardContent className="p-4 space-y-4">
            <h2 className="text-xl font-bold text-center">Histórico de Serviços</h2>
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white/10 p-3 rounded-lg flex justify-between items-center">
                <div>
                  <p className="font-semibold">Serviço #{item}</p>
                  <p className="text-sm text-blue-200">Status: Concluído</p>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      <motion.footer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-center text-blue-200 text-sm">
        <p>© 2025 ProntoLar Serviços • (84) 9 9196-9166</p>
      </motion.footer>
    </div>
  );
}
