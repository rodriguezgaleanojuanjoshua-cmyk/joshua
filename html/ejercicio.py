# {{*/nombres_productos = []
# cantidades_stock = []

# try:
#     n_productos = int(input("cuantos productos va a registrar?: "))

#     for i in range(n_productos):
#         nombre = input(f"Ingrese el nombre del producto {i+1}: ")

#         while True:
#             try:
#                 cantidad = int(input(f"ingrese stock de {nombre}"))
#                 break
#             except:    
#                 print("Error: Ingrese un numero entero valido:")

#         nombres_productos.append(nombre)
#         cantidades_stock.append(cantidad)

#     print("REPORTE INVENTARIO\n")
#     suma_total = 0

#     for i in range(len(nombres_productos)):
#         nombre = nombres_productos[i]
#         stock = cantidades_stock[i]
#         suma_total += stock

#         if stock == 0:
#             print(f"CRITICO: {nombre} agotado.")
#         else:
#             if stock < 5:
#                 print(f"ALERTA:{nombre} stock bajo {stock} unidades")
#             else:
#                 if stock > 20:
#                     print(f"{nombre}: Stock excedente, aplicar descuento")
#                 else:
#                     print(f"{nombre}: Stock saludable")        
    
#     promedio = suma_total / n_productos
#     print(f"total de productos: {n_productos}\n")
#     print(f"promedio de stock en bodega: {promedio}")

# except ValueError:
#     print("Error: El numero de productos debe ser entero")/*}}


# salud_jefe = 100
# energia = 50

# ataques = [
#     ["Normal", 10],
#     ["Especial", 15],
#     ["Especial", 20],
#     ["Normal", 5],
#     ["Especial"],   
#     ["Normal", -3]  
# ]

# i = 0

# while i < len(ataques):

#     print(f"\nAtaque #{i+1}")

#     ataque = ataques[i]

#     try:
#         tipo = ataque[0]
#         dano = ataque[1]

#     except:
#         print("Ataque fallido")
#         i += 1
#         continue

#     if dano <= 0:
#         print("Daño inválido")
#         i += 1
#         continue

#     if tipo == "Especial":

#         if energia >= 20:
#             salud_jefe -= dano * 2
#             energia -= 20

#             print(f"Ataque especial realizado")
#             print(f"Daño causado: {dano * 2}")

#         else:
#             print("Sin energía")

#             i += 1
#             continue

#     else:
#         salud_jefe -= dano

#         print("Ataque normal realizado")
#         print(f"Daño causado: {dano}")

#     print(f"Salud del jefe: {salud_jefe}")
#     print(f"Energía restante: {energia}")

#     if salud_jefe <= 0:
#         print("\n¡Jefe derrotado!")
#         break

#     i += 1

# if salud_jefe > 0:
#     print("\nEl jefe sobrevive")


salud_jefe = 100
energia = 50

# Lista de ataques
# ataques = [
#     ["Normal", 10],
#     ["Especial", 15],
#     ["Especial", 20],
#     ["Normal", 5],
#     ["Especial"],     # Error: faltan datos
#     ["Normal", -3]    # Daño inválido
# ]

# i = 0

# while i < len(ataques):

#     print(f"\nAtaque #{i+1}")

#     ataque = ataques[i]

#     try:
#         # Extraer datos
#         tipo = ataque[0]
#         dano = ataque[1]

#     except:
#         print("Ataque fallido")
#         i += 1
#         continue

#     # Validar daño
#     if dano <= 0:
#         print("Daño inválido")
#         i += 1
#         continue

#     # Ataque especial
#     if tipo == "Especial":

#         if energia >= 20:
#             salud_jefe -= dano * 2
#             energia -= 20

#             print("Ataque especial realizado")
#             print(f"Daño causado: {dano * 2}")

#         else:
#             print("Sin energía")
#             i += 1
#             continue

#     # Ataque normal
#     else:
#         salud_jefe -= dano

#         print("Ataque normal realizado")
#         print(f"Daño causado: {dano}")

#     print(f"Salud del jefe: {salud_jefe}")
#     print(f"Energía restante: {energia}")

#     # Verificar si el jefe fue derrotado
#     if salud_jefe <= 0:
#         print("\n¡Jefe derrotado!")
#         break

#     i += 1

# # Resultado final
# if salud_jefe > 0:
#     print("\nEl jefe sobrevive")

salud_jefe = 100
energia = 50

while salud_jefe > 0:

    print("\n======================")
    print("1. Ataque Normal")
    print("2. Ataque Especial")
    print("3. Salir")
    print("======================")

    opcion = input("Seleccione un ataque: ")

    # Ataque normal
    if opcion == "1":

        dano = int(input("Ingrese el daño del ataque normal: "))

        if dano > 0:

            salud_jefe -= dano

            print("\nAtaque normal realizado")
            print(f"Daño causado: {dano}")

        else:
            print("Daño inválido")

    # Ataque especial
    elif opcion == "2":

        dano = int(input("Ingrese el daño del ataque especial: "))

        if dano > 0:

            if energia >= 20:

                salud_jefe -= dano * 2
                energia -= 20

                print("\nAtaque especial realizado")
                print(f"Daño causado: {dano * 2}")

            else:
                print("Sin energía suficiente")

        else:
            print("Daño inválido")

    # Salir
    elif opcion == "3":
        print("Saliendo del juego...")
        break

    else:
        print("Opción inválida")

    # Evitar salud negativa
    if salud_jefe < 0:
        salud_jefe = 0

    print(f"\nSalud del jefe: {salud_jefe}")
    print(f"Energía restante: {energia}")

# Resultado final
if salud_jefe == 0:
    print("\n¡Jefe derrotado!")
else:
    print("\nEl jefe sobrevivió")