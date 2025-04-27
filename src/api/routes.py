"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Lead
from api.utils import generate_sitemap, APIException
from flask_cors import CORS, cross_origin

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/api/contacto', methods=['POST'])
@cross_origin(origins="https://musical-garbanzo-ggxjgpq4qp6crqj-3000.app.github.dev")
def guardar_lead():
    data = request.get_json()

    nombre = data.get('nombre')
    email = data.get('email')
    telefono = data.get('telefono')
    mensaje = data.get('mensaje')

    if not nombre or not email or not mensaje:
        return jsonify({"error": "Faltan campos obligatorios"}), 400

    nuevo_lead = Lead(
        nombre=nombre,
        email=email,
        telefono=telefono,
        mensaje=mensaje
    )

    db.session.add(nuevo_lead)
    db.session.commit()

    return jsonify({"msg": "Gracias por tu mensaje, te contactaremos pronto."}), 201
