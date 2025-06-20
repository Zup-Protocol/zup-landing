export default function AuroraBackground({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="relative h-screen overflow-hidden">
        {/* Usamos inset-0 para cobrir toda a área do container pai */}
        <div className="absolute inset-0 z-0">
          {/* 1. O Background com Gradiente Principal */}

        </div>

        {/* 3. Seu Conteúdo (que virá via "children") */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </main>
  );
}