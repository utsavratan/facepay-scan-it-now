
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ScanFace, Camera } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface FaceScannerProps {
  onSuccessfulScan: () => void;
  scanMode?: 'register' | 'payment';
}

const FaceScanner: React.FC<FaceScannerProps> = ({ onSuccessfulScan, scanMode = 'payment' }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [cameraPermission, setCameraPermission] = useState<boolean | null>(null);
  const [cameraActive, setCameraActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const { toast } = useToast();

  const startCamera = async () => {
    try {
      const constraints = { 
        video: { 
          facingMode: "user",
          width: { ideal: 640 },
          height: { ideal: 480 }
        } 
      };
      
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      
      setCameraPermission(true);
      setCameraActive(true);
      return true;
    } catch (err) {
      console.error("Error accessing camera:", err);
      toast({
        title: "Camera access denied",
        description: "Please allow camera access to use the face scanning feature",
        variant: "destructive",
      });
      setCameraPermission(false);
      return false;
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => {
        track.stop();
      });
      streamRef.current = null;
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
      setCameraActive(false);
    }
  };

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  useEffect(() => {
    let interval: number | undefined;
    
    if (isScanning) {
      interval = window.setInterval(() => {
        setScanProgress((prev) => {
          const newProgress = prev + 2;
          if (newProgress >= 100) {
            setIsScanning(false);
            
            // Simulate successful scan
            toast({
              title: scanMode === 'register' ? "Face registered successfully!" : "Face verified!",
              description: scanMode === 'register' 
                ? "Your face has been securely registered with FaciPay." 
                : "Your identity has been confirmed.",
              duration: 3000,
            });
            
            onSuccessfulScan();
            return 0;
          }
          return newProgress;
        });
      }, 50);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isScanning, onSuccessfulScan, scanMode, toast]);

  const handleStartCamera = async () => {
    await startCamera();
  };

  const handleStartScan = () => {
    if (cameraActive) {
      setIsScanning(true);
      setScanProgress(0);
      
      toast({
        title: "Starting face scan",
        description: "Please keep your face centered in the frame",
        duration: 3000,
      });
    } else {
      toast({
        title: "Camera not active",
        description: "Please start your camera first",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-64 h-64 md:w-80 md:h-80 mb-6 overflow-hidden rounded-full">
        {/* Video element for camera feed */}
        {cameraActive && (
          <video 
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            playsInline
            muted
          />
        )}
        
        {/* Scanner frame */}
        <div className={`absolute inset-0 rounded-full border-4 ${isScanning ? 'border-facipay-blue animate-pulse' : 'border-gray-300'}`} />
        
        {/* Pulsing effect */}
        {isScanning && (
          <div className="absolute inset-0 rounded-full border-4 border-facipay-blue animate-pulse-ring" />
        )}
        
        {/* Face placeholder when not scanning */}
        {!cameraActive && (
          <div className="absolute inset-0 flex items-center justify-center">
            <ScanFace size={80} className="text-gray-400" />
          </div>
        )}
        
        {/* Scanning progress overlay */}
        {isScanning && (
          <div className="absolute inset-x-0 top-0 overflow-hidden rounded-full">
            <div className="h-full w-full bg-facipay-blue/20" 
                 style={{height: `${scanProgress}%`}} />
          </div>
        )}
      </div>
      
      <div className="text-center space-y-4">
        <h3 className="text-lg font-medium">
          {scanMode === 'register' ? 'Register Your Face' : 'Scan Your Face to Pay'}
        </h3>
        <p className="text-facipay-gray max-w-md">
          {scanMode === 'register' 
            ? 'Your face data is securely encrypted and stored. It will be used to authenticate your payments.' 
            : 'Position your face in the center of the frame for quick verification.'}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {!cameraActive ? (
            <Button onClick={handleStartCamera} className="gradient-bg">
              <Camera className="mr-2" size={18} />
              Start Camera
            </Button>
          ) : !isScanning ? (
            <>
              <Button onClick={handleStartScan} className="gradient-bg">
                <ScanFace className="mr-2" size={18} />
                {scanMode === 'register' ? 'Register Face' : 'Start Scan'}
              </Button>
              <Button onClick={stopCamera} variant="outline">
                Stop Camera
              </Button>
            </>
          ) : (
            <p className="text-facipay-blue font-medium">Scanning... {scanProgress}%</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaceScanner;
