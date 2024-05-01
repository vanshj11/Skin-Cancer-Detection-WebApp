import torch
from torchvision import transforms
from PIL import Image

# device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

model_path = 'E:\\ai_pjt\Healthcare-App\Backend\model1.pth'
model_state_dict = torch.load(model_path)
model = torch.hub.load('pytorch/vision:v0.13.0', 'inception_v3', pretrained=False)
model.load_state_dict(model_state_dict)

for param in model.parameters():
    param.requires_grad = False 

# model.to(device)

image_path = 'E:\\ai_pjt\siim-isic-melanoma-classification\jpeg\\train\ISIC_0149568.jpg'

transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(), 
])


img = Image.open(image_path)

img_tensor = transform(img).unsqueeze(0)  

model.eval()

torch.onnx.export(model, img_tensor, 'onnx_model.onnx', verbose=True)