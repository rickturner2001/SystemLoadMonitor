import psutil
from fastapi import FastAPI
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def read_root():

    cpu_percent = psutil.cpu_percent(percpu=True, interval=1)
    mem = psutil.virtual_memory()

    total_mem = mem.total / (1024 * 1024)
    available_mem = mem.available / (1024 * 1024)
    used_mem = mem.used / (1024 * 1024)
    mem_percent = mem.percent

    return {"cpu": cpu_percent, "memory": {"total": total_mem, "available": available_mem, "used": used_mem, "pct": mem_percent}}


if __name__ == "__main__":
    uvicorn.run(app)
