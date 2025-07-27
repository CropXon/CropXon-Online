import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mic, MicOff, Volume2, VolumeX, Bot, MessageCircle, Languages } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import bhumitraRobotImage from "@/assets/bhumitra-robot.jpg";

const CropXonAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("odia");
  const [isMinimized, setIsMinimized] = useState(true);
  const { toast } = useToast();

  const languages = [
    { code: "odia", name: "ଓଡ଼ିଆ (Odia)", flag: "🇮🇳" },
    { code: "hindi", name: "हिंदी (Hindi)", flag: "🇮🇳" },
    { code: "english", name: "English", flag: "🇺🇸" }
  ];

  const cropXonInfo = {
    odia: {
      greeting: "ନମସ୍କାର! ମୁଁ ଭୂମିତ୍ର, ଆପଣଙ୍କର CropXon ସହାୟିକା। ମୁଁ ଆପଣଙ୍କୁ ଚାଷବାସ ଏବଂ କୃଷି ପ୍ରଯୁକ୍ତି ବିଷୟରେ ସାହାଯ୍ୟ କରିପାରିବି।",
      about: "CropXon ହେଉଛି ଓଡିଶାର କୃଷକମାନଙ୍କ ପାଇଁ ଏକ ଆଧୁନିକ କୃଷି ପ୍ଲାଟଫର୍ମ। ଆମେ ଆର୍ଟିଫିସିଆଲ ଇଣ୍ଟେଲିଜେନ୍ସ ଚାଳିତ ସମାଧାନ, ସ୍ମାର୍ଟ ଫାର୍ମିଂ ଟେକ୍ନୋଲୋଜି ଏବଂ କୃଷି ଋଣ ସୁବିଧା ପ୍ରଦାନ କରୁଛୁ।",
      story: "ଆମେ ୨୦୨୪ ରେ ଆରମ୍ଭ କରିଛୁ 'ମାଟିରୁ ମନ' ପର୍ଯ୍ୟନ୍ତ - ଓଡିଶାର କୃଷକମାନଙ୍କୁ ଆଧୁନିକ କୃଷି ପ୍ରଯୁକ୍ତିର ସୁବିଧା ଦେବା ଏବଂ ସେମାନଙ୍କ ଜୀବନଯାତ୍ରାରେ ଉନ୍ନତି ଆଣିବା ପାଇଁ।",
      help: "ମୁଁ ଆପଣଙ୍କୁ ସାହାଯ୍ୟ କରିପାରିବି - ଫସଲ ପରାମର୍ଶ, ମୌସମ ପୂର୍ବାନୁମାନ, ସରକାରୀ ଯୋଜନା, ଋଣ ସୁବିଧା, ଏବଂ ସ୍ମାର୍ଟ ଫାର୍ମିଂ ଟିପ୍ସ ବିଷୟରେ।"
    },
    hindi: {
      greeting: "नमस्कार! मैं भूमित्र, आपका CropXon सहायक हूं। मैं आपकी खेती और कृषि तकनीक में मदद कर सकता हूं।",
      about: "CropXon ओडिशा के किसानों के लिए एक आधुनिक कृषि मंच है। हम AI संचालित समाधान, स्मार्ट फार्मिंग तकनीक और कृषि ऋण सुविधा प्रदान करते हैं।",
      story: "हमने 2024 में 'मिट्टी से आत्मा तक' के मिशन के साथ शुरुआत की - ओडिशा के किसानों को आधुनिक कृषि तकनीक का लाभ देने और उनके जीवन में सुधार लाने के लिए।",
      help: "मैं आपकी मदद कर सकता हूं - फसल सलाह, मौसम पूर्वानुमान, सरकारी योजनाएं, ऋण सुविधा, और स्मार्ट फार्मिंग टिप्स के बारे में।"
    },
    english: {
      greeting: "Hello! I'm BhuMitra, your CropXon Assistant. I can help you with all your farming and agricultural technology needs.",
      about: "CropXon is a modern agriculture platform for farmers in Odisha. We provide AI-powered solutions, smart farming technology, and agricultural loan facilities.",
      story: "We started in 2024 with our mission 'From Soil to Soul' - to bring modern agricultural technology to farmers in Odisha and transform their lives for the better.",
      help: "I can help you with - crop advisory, weather forecasts, government schemes, loan facilities, and smart farming tips."
    }
  };

  const startListening = async () => {
    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setIsListening(true);
      
      toast({
        title: "Listening...",
        description: `Speak in ${languages.find(l => l.code === currentLanguage)?.name}`,
      });

      // Simulate listening for 5 seconds
      setTimeout(() => {
        setIsListening(false);
        handleVoiceResponse();
      }, 5000);

    } catch (error) {
      toast({
        title: "Microphone Error",
        description: "Please allow microphone access to use voice features.",
        variant: "destructive"
      });
    }
  };

  const handleVoiceResponse = () => {
    setIsSpeaking(true);
    const info = cropXonInfo[currentLanguage as keyof typeof cropXonInfo];
    
    // Simulate AI response
    toast({
      title: "CropXon Assistant",
      description: info.greeting,
    });

    // Simulate speech synthesis
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(info.greeting);
      utterance.lang = currentLanguage === 'odia' ? 'hi-IN' : currentLanguage === 'hindi' ? 'hi-IN' : 'en-US';
      utterance.onend = () => setIsSpeaking(false);
      speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setIsSpeaking(false), 3000);
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsMinimized(false)}
          className="rounded-full w-16 h-16 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 border-2 border-white/20"
        >
          <div className="relative">
            <img 
              src={bhumitraRobotImage} 
              alt="BhuMitra - CropXon Assistant" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
          </div>
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80">
      <Card className="shadow-2xl border-primary/20 bg-gradient-to-br from-background to-background/95 backdrop-blur-xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="relative">
                <img 
                  src={bhumitraRobotImage} 
                  alt="BhuMitra - CropXon Assistant" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div className="ml-3">
                <h3 className="font-semibold text-foreground">BhuMitra - CropXon Assistant</h3>
                <div className="flex items-center text-xs text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  AI Assistant • Online
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(true)}
              className="hover:bg-destructive/10 hover:text-destructive"
            >
              ×
            </Button>
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-2">
              <Languages className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium">Language</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {languages.map((lang) => (
                <Button
                  key={lang.code}
                  variant={currentLanguage === lang.code ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentLanguage(lang.code)}
                  className="text-xs"
                >
                  {lang.flag}
                </Button>
              ))}
            </div>
          </div>

          <div className="text-center mb-4">
            <p className="text-sm text-muted-foreground mb-3">
              Ask me about CropXon, farming tips, or our services
            </p>
            
            <div className="flex justify-center space-x-3">
              <Button
                onClick={isListening ? () => setIsListening(false) : startListening}
                disabled={isSpeaking}
                className={`rounded-full w-12 h-12 ${isListening ? 'bg-red-500 hover:bg-red-600' : ''}`}
              >
                {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </Button>
              
              <Button
                onClick={isSpeaking ? stopSpeaking : handleVoiceResponse}
                variant="outline"
                className="rounded-full w-12 h-12"
              >
                {isSpeaking ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Quick Questions:</h4>
            <div className="space-y-1">
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-left justify-start text-xs"
                onClick={handleVoiceResponse}
              >
                What is CropXon?
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-left justify-start text-xs"
                onClick={handleVoiceResponse}
              >
                How can CropXon help my farm?
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-left justify-start text-xs"
                onClick={handleVoiceResponse}
              >
                Tell me about smart farming
              </Button>
            </div>
          </div>

          {(isListening || isSpeaking) && (
            <div className="mt-4 p-3 bg-primary/5 rounded-lg">
              <div className="flex items-center">
                {isListening && (
                  <>
                    <Mic className="w-4 h-4 text-primary mr-2 animate-pulse" />
                    <span className="text-sm">Listening...</span>
                  </>
                )}
                {isSpeaking && (
                  <>
                    <Volume2 className="w-4 h-4 text-primary mr-2 animate-pulse" />
                    <span className="text-sm">Speaking...</span>
                  </>
                )}
              </div>
            </div>
          )}

          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              Voice-enabled AI assistant in your local language
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CropXonAssistant;